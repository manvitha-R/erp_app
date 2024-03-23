import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.scss']
})
export class EditStatusComponent implements OnInit{

  addstatus: any;
  id: any;


  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
     private url: ActivatedRoute
     ) {
       this.addstatus = fb.group(
         {
           status_name:['',Validators.required],
          status_desc:['',Validators.required]
         
         }
       )
     }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlestatus(this.id).subscribe(data =>{
      this.addstatus.patchValue(data);
     })
   
  }

  onSubmit(){
    console.log(this.addstatus.value);
    this.studentservice.updatestatus(this.id,this.addstatus.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-status']);

    })

  }
}
