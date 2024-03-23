import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss']
})
export class AddBusinessComponent  implements OnInit{

  addcategory:any;
  addbusiness: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
     private url: ActivatedRoute
     
     ) {
       this.addbusiness = fb.group(
         {
           business_name:['',Validators.required],
          business_desc:['',Validators.required]
         
         }
       )
     }
  
    ngOnInit(): void {
      
    }
  
  
    onSubmit(){
      console.log(this.addbusiness.value);
      this.studentservice.addbusiness(this.addbusiness.value).subscribe((data:any)=>{
        console.log(data);
        alert("Business added successfully!!!!")
        this.routes.navigate(['/list-business']);
  
      })
  
    }
  
  }
  