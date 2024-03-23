import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-enquiry',
  templateUrl: './list-enquiry.component.html',
  styleUrls: ['./list-enquiry.component.scss']
})
export class ListEnquiryComponent implements OnInit{
  
  enquiry_mode: any;
 
 

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
  searchText = '';

  loadsStudent(){
    this.studentservice.listsmode().subscribe((data:any)=>{
      // console.log(data);
      this.enquiry_mode = data;

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
    if(confirm('Are you sure you want to delete enquiry_mode?'))
    this.studentservice.softdeletemode(datas._id).subscribe(data =>{
      alert ("Enquiry_mode deleted successfully!");
      console.log(data);
      this.enquiry_mode = this.enquiry_mode.filter((u:any)=>u!==datas)
    })

  }
}

