import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit{

  addcategory:any;
  id: any;
  constructor(private fb:FormBuilder,
    private routes:Router,
     private studentservice:StudentsService,
     private url: ActivatedRoute
     
     ) {
       this.addcategory = fb.group(
         {
           category_name:['',Validators.required],
          category_desc:['',Validators.required]
         
         }
       )
     }
  
    ngOnInit(): void {
      this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlecat(this.id).subscribe(data =>{
      this.addcategory.patchValue(data);
     })
    
      
    }
  
  
    onSubmit(){
      console.log(this.addcategory.value);
      this.studentservice.updatecat(this.id,this.addcategory.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/list-category']);
  
      })
  
    }
  
  }
  