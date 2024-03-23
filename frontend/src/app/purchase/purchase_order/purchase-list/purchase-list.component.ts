import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent   implements OnInit{
  purchase_order: any;

  searchText = '';

  // purchase_grn: any;
  
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsorder().subscribe((data:any)=>{
      // console.log(data);
      this.purchase_order = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeleteorder(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.purchase_order = this.purchase_order.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  