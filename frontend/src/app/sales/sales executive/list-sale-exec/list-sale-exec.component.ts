import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-sale-exec',
  templateUrl: './list-sale-exec.component.html',
  styleUrls: ['./list-sale-exec.component.scss']
})
export class ListSaleExecComponent   implements OnInit{
  roles: any;
 

  sales_executive: any;
 
 

  constructor(private studentservice:StudentsService,
    private routes:Router,

    ){}

  ngOnInit(): void {
    this.loadsStudent();
    
  }
// Get All User Data

  // loadStudent(){
  //   this.studentservice.listStudent().subscribe((data:any)=>{
  //     // console.log(data);
  //     this.students = data;

  //   })
  // }

  // Get User Data When Delete Flag is False
  
  loadsStudent(){
    this.studentservice.listsSalesExecutive().subscribe((data:any)=>{
      // console.log(data);
      this.sales_executive = data;

    })
  }
// Hard delete //

  // delStudent(data:any){
  //   this.studentservice.deleteStudent(data._id).subscribe(data =>{
  //     console.log(data);
  //   })

  // }


  // Soft Delete //

  softRoles(datas:any){
    if(confirm('Are you sure you want to delete designation?'))
    this.studentservice.softdeleteSalesExecutive(datas._id).subscribe(data =>{
  alert("Designation deleted successfully");
      console.log(data);
      this.sales_executive = this.sales_executive.filter((u:any)=>u!==datas)
    })

  }
}

