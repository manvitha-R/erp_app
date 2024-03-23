import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent implements OnInit{

  addstatus: any;


  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService
     ) {
       this.addstatus = fb.group(
         {
           status_name:['',Validators.required],
          status_desc:['',Validators.required]
         
         }
       )
     }
  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log(this.addstatus.value);
    this.studentservice.addstatus(this.addstatus.value).subscribe((data:any)=>{
      console.log(data);
      alert("Status added successfully!!!!")
      this.routes.navigate(['/list-status']);

    })

  }
}
