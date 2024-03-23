import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-enq-type',
  templateUrl: './edit-enq-type.component.html',
  styleUrls: ['./edit-enq-type.component.scss']
})
export class EditEnqTypeComponent implements OnInit {

  addmode:any;
  addtype: any;
  id: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
     private url: ActivatedRoute
    
     ) {
       this.addtype = fb.group(
         {
           enq_type_name:['',Validators.required],
          enq_type_desc:['',Validators.required]
         
         }
       )
     }
  
    ngOnInit(): void {
      this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singletype(this.id).subscribe(data =>{
      this.addtype.patchValue(data);
     })
  
    }
  
    onSubmit(){
      console.log(this.addtype.value);
      this.studentservice.updatetype(this.id,this.addtype.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/list-type']);
  
      })
  
    }
  }
  