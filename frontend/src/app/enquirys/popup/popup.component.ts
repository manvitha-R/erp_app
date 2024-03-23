import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent  implements OnInit {
  // @Input() data: any;
  // formGroup!: FormGroup
  inventory: any[] = [];
  searchText = '';
  // addenquiry!: FormGroup;
  // addinventory!: FormGroup;


  constructor(private fb: FormBuilder, private studentservice: StudentsService,  private routes:Router,) {}

  ngOnInit(): void {
    this.loadStudent();
    
  }

  loadStudent() {
    this.studentservice.listsinventory().subscribe((data: any) => {
      this.inventory = data.map((item: any) => ({ ...item, checked: false }));
    });
  }


  saveCheckedData() {
    
    // console.log('Save Checked Data button clicked');
      console.log('Selected Rows before clearing:', this.studentservice.getSelectedItems());
      
      // Clear selected rows to avoid duplication
      // this.studentservice.clearSelectedItems();
  
      // Add selected rows to the service
       this.inventory.forEach((item) => {
        if (item.checked) {
          this.studentservice.addSelectedItem(item);
         
          // Optionally, you can remove the selected row from the current table
          // this.inventory = this.inventory.filter((i) => !i.checked);
         }
       });
      this.routes.navigate(['/enquiry-add']);
    
 
  
}
}


  
  