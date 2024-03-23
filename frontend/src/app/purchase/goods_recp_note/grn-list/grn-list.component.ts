import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-grn-list',
  templateUrl: './grn-list.component.html',
  styleUrls: ['./grn-list.component.scss']
})
export class GrnListComponent   implements OnInit{


  purchase_grn: any;
  searchText = '';
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsgrn().subscribe((data:any)=>{
      // console.log(data);
      this.purchase_grn = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete employee?'))
    this.studentservice.softdeletegrn(datas._id).subscribe(data =>{
  alert("Employee deleted successfully");
      console.log(data);
      this.purchase_grn = this.purchase_grn.filter((u:any)=>u!==datas)
    })
  
  }
  }
  
  
  
  
  