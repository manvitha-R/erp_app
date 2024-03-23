import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-followup',
  templateUrl: './list-followup.component.html',
  styleUrls: ['./list-followup.component.scss']
})
export class ListFollowupComponent   implements OnInit{
  roles: any;
 

  enquiry: any;
 
 

  constructor(private studentservice:StudentsService,
    private routes:Router,

    ){}

    loadsStudent(){
      this.studentservice.listenquiry().subscribe((data:any)=>{
        this.enquiry = data;
      })
    }

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
  
  // loadsStudent(){
  //   this.studentservice.listsSalesExecutive().subscribe((data:any)=>{
  //     // console.log(data);
  //     this.sales_executive = data;

  //   })
  // }
// Hard delete //

  // delStudent(data:any){
  //   this.studentservice.deleteStudent(data._id).subscribe(data =>{
  //     console.log(data);
  //   })

  // }

searchText = '';
  // Soft Delete //

  softRoles(datas:any){
    if(confirm('Are you sure you want to delete enquiry?'))
    this.studentservice.softdeleteenquiry(datas._id).subscribe(data =>{
  alert("Enquiry deleted successfully");
      console.log(data);
      this.enquiry = this.enquiry.filter((u:any)=>u!==datas)
    })

  }
}