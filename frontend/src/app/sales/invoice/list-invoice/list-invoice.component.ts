import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent    implements OnInit{


  invoice: any;
  searchText = '';
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsinvoice().subscribe((data:any)=>{
      // console.log(data);
      this.invoice = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeleteinvoice(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.invoice = this.invoice.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  