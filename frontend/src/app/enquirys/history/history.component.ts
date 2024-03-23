import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent    implements OnInit{
  // roles: any;
 

  history: any;
 enq: any;
 

  constructor(private studentservice:StudentsService,
    private routes:Router,

    ){}

    loadsStudent(){
      this.studentservice.listenquiry().subscribe((data:any)=>{
        this.history = data;
      })
    }

  ngOnInit(): void {
    this.loadsStudent();
    
  }


searchText = '';
  // Soft Delete //

  softRoles(datas:any){
    if(confirm('Are you sure you want to delete follow-up history?'))
    this.studentservice.softdeleteenquiry(datas._id).subscribe(data =>{
  alert("Follow-up history deleted successfully");
      console.log(data);
      this.history = this.history.filter((u:any)=>u!==datas)
    })

  }
}

