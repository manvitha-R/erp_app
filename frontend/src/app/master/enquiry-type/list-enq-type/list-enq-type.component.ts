import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-enq-type',
  templateUrl: './list-enq-type.component.html',
  styleUrls: ['./list-enq-type.component.scss']
})
export class ListEnqTypeComponent implements OnInit{
  
  enquiry_mode: any;
  enquiry_type: any;
 
 

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
    this.studentservice.liststype().subscribe((data:any)=>{
      // console.log(data);
      this.enquiry_type = data;

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
    if(confirm('Are you sure you want to delete enquiry_type?'))
    this.studentservice.softdeletetype(datas._id).subscribe(data =>{
      alert ("Enquiry_type deleted successfully!");
      console.log(data);
      this.enquiry_type = this.enquiry_type.filter((u:any)=>u!==datas)
    })

  }
}

