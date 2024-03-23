import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit{
  
  status: any;
 
 searchText = '';

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
    this.studentservice.listsstatus().subscribe((data:any)=>{
      // console.log(data);
      this.status = data;

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
    if(confirm('Are you sure you want to delete status?'))
    this.studentservice.softdeletestatus(datas._id).subscribe(data =>{
  alert("Status deleted successfully");
      console.log(data);
      this.status = this.status.filter((u:any)=>u!==datas)
    })

  }
}