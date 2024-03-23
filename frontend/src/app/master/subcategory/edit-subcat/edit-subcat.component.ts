import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-subcat',
  templateUrl: './edit-subcat.component.html',
  styleUrls: ['./edit-subcat.component.scss']
})
export class EditSubcatComponent implements OnInit {
 
  addsubcat:any;
  id: any;

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlesubcat(this.id).subscribe(data =>{
      this.addsubcat.patchValue(data);
     })
  }
constructor(private fb:FormBuilder,
  private routes:Router,
   private studentservice:StudentsService,
   private url: ActivatedRoute
  
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
  this.studentservice.updatesubcat(this.id,this.addsubcat.value).subscribe((data:any)=>{
    console.log(data);
    this.routes.navigate(['/list-subcat']);

  })

}
}
