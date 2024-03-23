import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-enq-type',
  templateUrl: './add-enq-type.component.html',
  styleUrls: ['./add-enq-type.component.scss']
})
export class AddEnqTypeComponent implements OnInit {

  addmode:any;
  addtype: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
    
     ) {
       this.addtype = fb.group(
         {
           enq_type_name:['',Validators.required],
          enq_type_desc:['',Validators.required]
         
         }
       )
     }
  
    ngOnInit(): void {
  
    }
  
    onSubmit(){
      console.log(this.addtype.value);
      this.studentservice.addtype(this.addtype.value).subscribe((data:any)=>{
        console.log(data);
        alert("Enquiry Type added successfully!!!!")
        this.routes.navigate(['/list-type']);
  
      })
  
    }
  }
  