import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  // inventory: any[] = [];
  searchText = '';
  selectedRows: any[] = [];

  constructor(private studentservice: StudentsService,  private dialog: MatDialog ) {}
  
  getSelectedItems() {
    return this.studentservice.getSelectedItems();
  }
  ngOnInit(): void {
    // console.log('Fetching selected rows from service');
    // this.selectedRows = this.studentservice.getSelectedRows();
    // console.log('Selected Rows:', this.selectedRows);
  }
  
  Openpopup(){
    this.dialog.open(PopupComponent,{
      width: '60%',
      height: '400px'
    })
  }
  // get selectedRows() {
  //   return this.studentservice.getSelectedRows();
  // }
}
