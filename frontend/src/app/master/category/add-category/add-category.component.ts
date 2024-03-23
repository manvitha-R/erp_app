import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{

addcategory:any;
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
    
  }


  onSubmit(){
    console.log(this.addcategory.value);
    this.studentservice.addcat(this.addcategory.value).subscribe((data:any)=>{
      console.log(data);
      alert("Category added successfully!!!!")
      this.routes.navigate(['/list-category']);

    })

  }

}
