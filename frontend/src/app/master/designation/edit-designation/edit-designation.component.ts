import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.scss']
})
export class EditDesignationComponent implements OnInit{

 
  addRoles: any;
  addDesignation: any;
  id: any;
 
  constructor(private fb:FormBuilder,
   private routes:Router,
    private studentservice:StudentsService,
    private url: ActivatedRoute
    ) {
      this.addDesignation = fb.group(
        {
          designation_name:['',Validators.required],
         designation_desc:['',Validators.required]
        
        }
      )
    }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singledesc(this.id).subscribe(data =>{
      this.addDesignation.patchValue(data);
     })
    
  }

  onSubmit(){
    console.log(this.addDesignation.value);
    this.studentservice.updatedesc(this.id,this.addDesignation.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-designation']);

    })

  }
}

