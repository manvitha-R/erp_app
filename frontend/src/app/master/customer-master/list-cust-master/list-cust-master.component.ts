import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-cust-master',
  templateUrl: './list-cust-master.component.html',
  styleUrls: ['./list-cust-master.component.scss']
})
export class ListCustMasterComponent  implements OnInit{

  customer: any;
  
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  searchText = '';
  loadsStudent(){
    this.studentservice.listscustomer().subscribe((data:any)=>{
      // console.log(data);
      this.customer = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeletecustomer(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.customer = this.customer.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  