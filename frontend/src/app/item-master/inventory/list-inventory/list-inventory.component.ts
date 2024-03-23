import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.scss']
})
export class ListInventoryComponent    implements OnInit{

  // customer: any;
  inventory: any;
  searchText = '';
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsinventory().subscribe((data:any)=>{
      // console.log(data);
      this.inventory = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeleteinventory(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.inventory = this.inventory.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  
