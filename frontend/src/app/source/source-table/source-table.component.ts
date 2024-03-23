import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Assuming the service file is in the same directory as the components
import { DataTransferService } from 'src/app/data-transfer.service';
import { StudentsService } from 'src/app/students.service';

// rest of your component code


// rest of your component code





@Component({
  selector: 'app-source-table',
  templateUrl: './source-table.component.html',
  styleUrls: ['./source-table.component.scss']
})
export class SourceTableComponent implements OnInit{
  selectedRow: any;

  constructor(private studentservice:StudentsService,) {}

  ngOnInit(): void {
    this.selectedRow = this.studentservice.getSelectedRow();
  }
}