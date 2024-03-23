import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit{
  addRoles: any;


  constructor(private fb:FormBuilder,
   private routes:Router,
    private studentservice:StudentsService
    ) {
      this.addRoles = fb.group(
        {
          role_name:['',Validators.required],
         role_desc:['',Validators.required]
        
        }
      )
    }
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.addRoles.value);
    this.studentservice.addRoles(this.addRoles.value).subscribe((data:any)=>{
      console.log(data);
      alert("Roles added successfully!!!!")
      this.routes.navigate(['/list-roles']);

    })

  }
}
