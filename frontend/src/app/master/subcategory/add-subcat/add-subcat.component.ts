import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-subcat',
  templateUrl: './add-subcat.component.html',
  styleUrls: ['./add-subcat.component.scss']
})
export class AddSubcatComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addsubcat:any;

  
constructor(private fb:FormBuilder,
  private routes:Router,
   private studentservice:StudentsService,
  
   ) {
     this.addsubcat = fb.group(
       {
         subcategory_name:['',Validators.required],
        subcategory_desc:['',Validators.required]
       
       }
     )
   }


onSubmit(){
  console.log(this.addsubcat.value);
  this.studentservice.addsubcat(this.addsubcat.value).subscribe((data:any)=>{
    console.log(data);
    alert("Sub-category added successfully!!!!")
    this.routes.navigate(['/list-subcat']);

  })

}
}
