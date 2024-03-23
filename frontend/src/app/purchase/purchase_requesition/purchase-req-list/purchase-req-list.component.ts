import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-purchase-req-list',
  templateUrl: './purchase-req-list.component.html',
  styleUrls: ['./purchase-req-list.component.scss']
})
export class PurchaseReqListComponent   implements OnInit{
  // purchase_order: any;
  purchase_requisition: any;

  searchText = '';

  // purchase_grn: any;
  
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsrequisition().subscribe((data:any)=>{
      // console.log(data);
      this.purchase_requisition = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeleterequisition(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.purchase_requisition= this.purchase_requisition.filter((u:any)=>u!==datas)
    })
  
  }
  }
  