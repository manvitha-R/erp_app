import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.scss']
})
export class EditRolesComponent implements OnInit{

 
  addRoles: any;
  id: any;
  constructor(private fb:FormBuilder,
   private routes:Router,
    private studentservice:StudentsService,
    private url: ActivatedRoute
    ) {
      this.addRoles = fb.group(
        {
          role_name:['',Validators.required],
         role_desc:['',Validators.required]
        
        }
      )
    }
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singleRoles(this.id).subscribe(data =>{
      this.addRoles.patchValue(data);
     })
    
  }

  onSubmit(){
    console.log(this.addRoles.value);
    this.studentservice.updateRoles(this.id,this.addRoles.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-roles']);

    })

  }
}