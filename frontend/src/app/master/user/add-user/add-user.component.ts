import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  adduser: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addsubcat:any;

  
constructor(private fb:FormBuilder,
  private routes:Router,
   private studentservice:StudentsService,
  
   ) {
     this.adduser = fb.group(
       {
         user_name:['',Validators.required],
         user_role:['',Validators.required],
        user_desc:['',Validators.required],
        user_password:['',Validators.required],
       
       }
     )
   }


onSubmit(){
  console.log(this.adduser.value);
  this.studentservice.adduser(this.adduser.value).subscribe((data:any)=>{
    console.log(data);
    alert("User added successfully!!!!")
    this.routes.navigate(['/list-user']);

  })

}
}
