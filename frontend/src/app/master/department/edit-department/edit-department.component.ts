import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit{

 
  addRoles: any;
  addDepartment: any;
  id: any;
  
 
  constructor(private fb:FormBuilder,
   private routes:Router,
    private studentservice:StudentsService,
    private url: ActivatedRoute
    ) {
      this.addDepartment = fb.group(
        {
          department_name:['',Validators.required],
         department_desc:['',Validators.required]
        
        }
      )
    }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singledepartment(this.id).subscribe(data =>{
      this.addDepartment.patchValue(data);
     })
    
  }

  onSubmit(){
    console.log(this.addDepartment.value);
    this.studentservice.updatedepartment(this.id,this.addDepartment.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-department']);

    })

  }
}