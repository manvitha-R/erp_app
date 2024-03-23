import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.scss']
})
export class AddEnquiryComponent implements OnInit {

addmode:any;
constructor(private fb:FormBuilder,
  private routes:Router,
   private studentservice:StudentsService,
  
   ) {
     this.addmode = fb.group(
       {
         enq_mode_name:['',Validators.required],
        enq_mode_desc:['',Validators.required]
       
       }
     )
   }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.addmode.value);
    this.studentservice.addmode(this.addmode.value).subscribe((data:any)=>{
      console.log(data);
      alert("Enquiry Mode added successfully!!!!")
      this.routes.navigate(['/list-enquiry']);

    })

  }
}
