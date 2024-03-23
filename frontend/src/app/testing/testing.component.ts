import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent   implements OnInit {
  // myForm: any;
  items = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    // Add more items as needed
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   rows: this.fb.array([]),
    // });

    // // Initialize with at least one row
    // this.addRow();
  }
  addRow() {
    const newItem = { name: 'New Item', description: 'New Description' };
    this.items.push(newItem);
  }
  // get rows() {
  //   return this.myForm.get('rows') as FormArray;
  // }

  // addRow() {
  //   const newRow = this.fb.group({
  //     // Add your form controls here
  //     // For example:
  //     name: ['', Validators.required],
  //     age: ['', Validators.required],
  //   });

  //   this.rows.push(newRow);
  // }

  // removeRow(index: number) {
  //   this.rows.removeAt(index);
  // }
}
