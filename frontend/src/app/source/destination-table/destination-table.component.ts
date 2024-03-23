import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-destination-table',
  templateUrl: './destination-table.component.html',
  styleUrls: ['./destination-table.component.scss']
})
export class DestinationTableComponent implements OnInit{
  tableData = [
    // Your data here
  ];
inventory: any;
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
  selectedRow: any;

  selectRow(row: any): void {
    this.selectedRow = row;
    this.studentservice.setSelectedRow(row); // Save selected row in service
    this.routes.navigate(['/source']); // Navigate to the new page
  }
}
