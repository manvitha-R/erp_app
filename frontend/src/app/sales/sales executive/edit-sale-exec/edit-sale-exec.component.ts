import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-sale-exec',
  templateUrl: './edit-sale-exec.component.html',
  styleUrls: ['./edit-sale-exec.component.scss']
})
export class EditSaleExecComponent   implements OnInit{


  addexecutive: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,   private url: ActivatedRoute)
{
  this.addexecutive=this.fb.group({
    exec_code:['',Validators.required],
    exec_name:['',Validators.required],
 
    exec_commission:['',Validators.required],
    exec_rateon:['',Validators.required],
    exec_amount:['',Validators.required],
    exec_email:['',Validators.required],
    exec_phone:['',Validators.required],
   
   })   
}

ngOnInit(): void {
  this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlesaleexecutive(this.id).subscribe(data =>{
      this.addexecutive.patchValue(data);
     })
}

onSubmit(){
  console.log(this.addexecutive.value);
    this.studentservice.updatesaleexecutive(this.id,this.addexecutive.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/list-exec']);

  })

}
}
