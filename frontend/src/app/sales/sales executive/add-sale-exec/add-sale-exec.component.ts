import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-sale-exec',
  templateUrl: './add-sale-exec.component.html',
  styleUrls: ['./add-sale-exec.component.scss']
})
export class AddSaleExecComponent   implements OnInit{


  addexecutive: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
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
 
}

onSubmit(){
  console.log(this.addexecutive.value);
  this.studentservice.addSalesExecutive(this.addexecutive.value).subscribe((data:any)=>{
    console.log(data);
    alert("Employee added successfully!!!!")
    this.routes.navigate(['/list-exec']);

  })

}
}
