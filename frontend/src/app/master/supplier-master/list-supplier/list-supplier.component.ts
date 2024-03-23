import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.scss']
})
export class ListSupplierComponent  implements OnInit{


  supplier: any;
  searchText = '';
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listssupplier().subscribe((data:any)=>{
      // console.log(data);
      this.supplier = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeletesupplier(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.supplier = this.supplier.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  