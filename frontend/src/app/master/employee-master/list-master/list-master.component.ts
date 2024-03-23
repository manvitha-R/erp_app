import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-master',
  templateUrl: './list-master.component.html',
  styleUrls: ['./list-master.component.scss']
})
export class ListMasterComponent implements OnInit{
employee: any;

constructor(private studentservice:StudentsService,
  private routes:Router,

  ){}

ngOnInit(): void {
  this.loadsStudent();
  
}

loadsStudent(){
  this.studentservice.listsmaster().subscribe((data:any)=>{
    // console.log(data);
    this.employee = data;

  })
}
softRoles(datas:any){
  if(confirm('Are you sure you want to delete employee?'))
  this.studentservice.softdeletemaster(datas._id).subscribe(data =>{
alert("Employee deleted successfully");
    console.log(data);
    this.employee = this.employee.filter((u:any)=>u!==datas)
  })

}

searchText = '';
}




