import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-enquiry',
  templateUrl: './edit-enquiry.component.html',
  styleUrls: ['./edit-enquiry.component.scss']
})
export class EditEnquiryComponent implements OnInit {

  addmode:any;
  id: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
     private url: ActivatedRoute
     ) {
       this.addmode = fb.group(
         {
           enq_mode_name:['',Validators.required],
          enq_mode_desc:['',Validators.required]
         
         }
       )
     }
  
    ngOnInit(): void {
      this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlemode(this.id).subscribe(data =>{
      this.addmode.patchValue(data);
     })
  
    }
  
    onSubmit(){
      console.log(this.addmode.value);
      this.studentservice.updatemode(this.id,this.addmode.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/list-enquiry']);
  
      })
  
    }
  }
  