import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent  implements OnInit {
  adduser: any;
  id: any;
  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singleuser(this.id).subscribe(data =>{
      this.adduser.patchValue(data);
     })
  }
  addsubcat:any;

  
constructor(private fb:FormBuilder,
  private routes:Router,
   private studentservice:StudentsService,
   private url: ActivatedRoute,
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
  this.studentservice.updateuser(this.id,this.adduser.value).subscribe((data:any)=>{
    console.log(data);
    this.routes.navigate(['/list-user']);

  })

}
}
