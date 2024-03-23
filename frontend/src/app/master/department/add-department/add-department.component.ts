import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit{

 
  addRoles: any;
  addDepartment: any;
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
    
  }

  onSubmit(){
    console.log(this.addDepartment.value);
    this.studentservice.adddepartment(this.addDepartment.value).subscribe((data:any)=>{
      console.log(data);
      alert("Department added successfully!!!!")
      this.routes.navigate(['/list-department']);

    })

  }
}

