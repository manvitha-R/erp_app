import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})
export class ListDepartmentComponent implements OnInit{
  roles: any;
 
  department: any;
 
 

  constructor(private studentservice:StudentsService,
    private routes:Router,

    ){}

  ngOnInit(): void {
    this.loadsStudent();
    
  }
  searchText = '';
// Get All User Data

  // loadStudent(){
  //   this.studentservice.listStudent().subscribe((data:any)=>{
  //     // console.log(data);
  //     this.students = data;

  //   })
  // }

  // Get User Data When Delete Flag is False
  
  loadsStudent(){
    this.studentservice.listsdepartment().subscribe((data:any)=>{
      // console.log(data);
      this.department = data;

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
    if(confirm('Are you sure you want to delete department?'))
    this.studentservice.softdeletedepartment(datas._id).subscribe(data =>{
  alert("Department deleted successfully");
      console.log(data);
      this.department = this.department.filter((u:any)=>u!==datas)
    })

  }
}
