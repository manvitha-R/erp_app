import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-orderlost-list',
  templateUrl: './orderlost-list.component.html',
  styleUrls: ['./orderlost-list.component.scss']
})
export class OrderlostListComponent   implements OnInit{

  estimate: any;
  
  searchText = '';

  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsestimate().subscribe((data:any)=>{
      // console.log(data);
      this.estimate = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete estimate?'))
    this.studentservice.softdeleteestimate(datas._id).subscribe(data =>{
  alert("Estimate deleted successfully");
      console.log(data);
      this.estimate = this.estimate.filter((u:any)=>u!==datas)
    })
  
  }
  }
  