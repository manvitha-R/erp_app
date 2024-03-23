import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss']
})
export class EditBusinessComponent  implements OnInit{

  addcategory:any;
  addbusiness: any;
  id: any;
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
      this.id = this.url.snapshot.params['id'];
   
      console.log(this.id);
       this.studentservice.singlebusiness(this.id).subscribe(data =>{
        this.addbusiness.patchValue(data);
       })
      
    }
  
  
    onSubmit(){
      console.log(this.addbusiness.value);
      this.studentservice.updatebusiness(this.id,this.addbusiness.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/list-business']);
  
      })
  
  
    }
  
  }
  