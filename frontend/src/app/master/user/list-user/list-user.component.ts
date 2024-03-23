import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent  implements OnInit{
 
  subcategorys: any;
  user: any;
 
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
    this.studentservice.listsuser().subscribe((data:any)=>{
      // console.log(data);
      this.user = data;

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
    if(confirm('Are you sure you want to delete user?'))
    this.studentservice.softdeleteuser(datas._id).subscribe(data =>{
  alert("User deleted successfully");
      console.log(data);
      this.user = this.user.filter((u:any)=>u!==datas)
    })

  }
}