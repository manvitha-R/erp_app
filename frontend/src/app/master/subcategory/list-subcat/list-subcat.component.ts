import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-subcat',
  templateUrl: './list-subcat.component.html',
  styleUrls: ['./list-subcat.component.scss']
})
export class ListSubcatComponent implements OnInit{
 
  subcategorys: any;
 
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
    this.studentservice.listssubcat().subscribe((data:any)=>{
      // console.log(data);
      this.subcategorys = data;

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
    if(confirm('Are you sure you want to delete sub-category?'))
    this.studentservice.softdeletesubcat(datas._id).subscribe(data =>{
  alert("Sub-Category deleted successfully");
      console.log(data);
      this.subcategorys = this.subcategorys.filter((u:any)=>u!==datas)
    })

  }
}