import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-estimate-popup',
  templateUrl: './estimate-popup.component.html',
  styleUrls: ['./estimate-popup.component.scss']
})
export class EstimatePopupComponent  implements OnInit {
  inventory: any[] = [];
  searchText = '';


  constructor(private studentservice: StudentsService,  private routes:Router,) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.studentservice.listsinventory().subscribe((data: any) => {
      this.inventory = data.map((item: any) => ({ ...item, checked: false }));
    });
  }

  // saveCheckedData() {
  //   const selectedItems = this.inventory.filter(item => item.checked);

  //   this.studentservice.savedata(selectedItems).subscribe(
  //     (response: any) => {
  //       console.log('Data saved successfully:', response);
  //     }
  //   //   (error: any) => {
  //   //     console.log('error saving data:', error);
  //   //   }
  //   );
  // }
  saveCheckedData() {
    // console.log('Save Checked Data button clicked');
      console.log('Selected Rows before clearing:', this.studentservice.getSelectedItems());
      
      // Clear selected rows to avoid duplication
      this.studentservice.clearSelectedItems();
  
      // Add selected rows to the service
      this.inventory.forEach((item) => {
        if (item.checked) {
          this.studentservice.addSelectedItem(item);
         
          // Optionally, you can remove the selected row from the current table
          // this.inventory = this.inventory.filter((i) => !i.checked);
        }
      });
      this.routes.navigate(['/estimate-add']);
      console.log('Selected Rows after saving:', this.studentservice.getSelectedItems());
    // const selectedItems = this.inventory.filter(item => item.checked);
    // selectedItems.forEach(item => this.studentservice.addSelectedItem(item));
    // Optionally, you can clear the selection in the current component
    // this.inventory.forEach(item => item.checked = false);
  }
  // 
  // saveCheckedData() {
  //   console.log('Save Checked Data button clicked');
  //   console.log('Selected Rows before clearing:', this.studentservice.getSelectedRows());
    
  //   // Clear selected rows to avoid duplication
  //   this.studentservice.clearSelectedRows();

  //   // Add selected rows to the service
  //   this.inventory.forEach((item) => {
  //     if (item.checked) {
  //       this.studentservice.addSelectedRow(item);
  //       // Optionally, you can remove the selected row from the current table
  //       // this.inventory = this.inventory.filter((i) => !i.checked);
  //     }
  //   });

  //   console.log('Selected Rows after saving:', this.studentservice.getSelectedRows());
  // }
  // onSubmit() {

  // }
}
