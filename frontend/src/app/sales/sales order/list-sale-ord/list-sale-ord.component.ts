import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-sale-ord',
  templateUrl: './list-sale-ord.component.html',
  styleUrls: ['./list-sale-ord.component.scss']
})
export class ListSaleOrdComponent  implements OnInit{

  sales_ord: any;
  
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  searchText = '';
  
  loadsStudent(){
    this.studentservice.listssales_ord().subscribe((data:any)=>{
      // console.log(data);
      this.sales_ord = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete sales-order?'))
    this.studentservice.softdeletesales_ord(datas._id).subscribe(data =>{
  alert("Sales-order deleted successfully");
      console.log(data);
      this.sales_ord = this.sales_ord.filter((u:any)=>u!==datas)
    })
  
  }
  }