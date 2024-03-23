import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-dispatch',
  templateUrl: './list-dispatch.component.html',
  styleUrls: ['./list-dispatch.component.scss']
})
export class ListDispatchComponent implements OnInit{

  dispatch: any;
  
  searchText = '';
  constructor(private studentservice:StudentsService,
    private routes:Router,
  
    ){}
  
  ngOnInit(): void {
    this.loadsStudent();
    
  }
  
  loadsStudent(){
    this.studentservice.listsdispatch().subscribe((data:any)=>{
      // console.log(data);
      this.dispatch = data;
  
    })
  }
  softRoles(datas:any){
    if(confirm('Are you sure you want to delete dispatch?'))
    this.studentservice.softdeletedispatch(datas._id).subscribe(data =>{
  alert("Dispatch deleted successfully");
      console.log(data);
      this.dispatch = this.dispatch.filter((u:any)=>u!==datas)
    })
  
  }
  }