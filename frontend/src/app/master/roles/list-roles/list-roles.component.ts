import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss'],
 
})
export class ListRolesComponent implements OnInit{
  public page = 4;
  public pageSize = 10;
  roles: any;
 
 

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
    this.studentservice.listsRoles().subscribe((data:any)=>{
      // console.log(data);
      this.roles = data;

    })
  }
// Hard delete //

  // delStudent(data:any){
  //   this.studentservice.deleteStudent(data._id).subscribe(data =>{
  //     console.log(data);
  //   })

  // }

updateuser(){

}
  // Soft Delete //

  softRoles(datas:any){
    if(confirm('Are you sure you want to delete role?'))
    this.studentservice.softdeleteRoles(datas._id).subscribe(data =>{
      alert ("Role deleted successfully!");
      console.log(data);
      this.roles = this.roles.filter((u:any)=>u!==datas)
    })

  }
}

