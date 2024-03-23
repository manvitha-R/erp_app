import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-enquiry-addd',
  templateUrl: './enquiry-addd.component.html',
  styleUrls: ['./enquiry-addd.component.scss']
})
export class EnquiryAdddComponent implements OnInit {

  addenquiry: FormGroup;
  itemsFormArray: any;
  items!: FormArray<any>;
  
  constructor(
    private fb: FormBuilder,
    private routes: Router,
    private studentservice: StudentsService,
    private dialog: MatDialog) {

    this.addenquiry = this.fb.group({
      enq_on: ['', Validators.required],
      enq_cust_name: ['', Validators.required],
      enq_by: ['', Validators.required],
      enq_date: ['', Validators.required],
      enq_reference: ['', Validators.required],
      enq_sales_co_ord: ['', Validators.required],
      enq_type: ['', Validators.required],
      status: ['', Validators.required],
      items: this.fb.array([]),
      enquiry: this.fb.array([])
    });
  }

 

  get itemsArray() {
    return this.addenquiry.get('items') as FormArray;
  }

  
  ngOnInit() {
    // this.populateItemsArray();
    }
  // populateItemsArray(){
  //   const selectedItems = this.studentservice.getSelectedItems();
  //   const itemsArray = this.fb.array([]);
  //   selectedItems.forEach(item => {
  //     // const itemGRou = this.createItemFormGroup(item);
  //     // this.createItemFormGroup(item);
  //   });
  // }

  
  addItems(): void {
     this.items = this.addenquiry.get('items') as FormArray;
     this.itemsArray.push(this.fb.group({
    // console.log("item" + item);
    // const itemFormGroup = this.fb.group({
      item_model_no: [ ''],
      item_name: [ ''],
      item_desc: [''],
      item_balance: [''],
      item_code: [''],
      item_seq: [''],
      item_hsn_code: [''],
      item_unit: [''],
      item_qty: [''],
      item_mrp: [''],
      item_rate: [''],
      item_amount: [''],
      item_eff_rate: [ ''],
      item_eff_value: [''],
      item_net_rate: [''],
      item_disc: [''],
      item_disc_value: [''],
      item_tax_code: [ ''],
      item_taxable: [''],
      item_tax_rate: [''],
      item_tax_amt: [''],
      item_igst: [''],
      item_cgst: [''],
      item_sgst: [''],
      item_cess_calc: [''],
      item_install_req: [''],
      item_posting_gl: [''],
      item_lead_time: [''],
      item_make: [''],
      item_markup: [''],
      item_markup_per: [''],
      item_sales_rate: [''],
      item_war_months: ['']
      // Add more form controls as needed
    }));
  }
 
  Openpopup() {
    this.dialog.open(PopupComponent, {
      width: '60%',
      height: '400px'
    })
  }

  deleteItem(index: number) {
    // this.items.splice(index,1);
    const itemsFormArray = this.items.get('items') as FormArray;
    this.itemsFormArray.removeAt(index);

  }

  onSubmit() {
    const selectedItems = this.studentservice.getSelectedItems();
    console.log(selectedItems);
    const formValue = { ...this.addenquiry.value, items: selectedItems };
    console.log(this.addenquiry.value);
    this.studentservice.addenquiry(formValue).subscribe(
      (response) => {
        console.log('enquiry added successfully!!!!', response);
        // alert("enquiry added successfully!!!!")
        this.routes.navigate(['/enquiry-listt']);
      },
      (error) => {
        console.error('Error adding enquiry', error);
      }
    );

  }
  

  getSelectedItems() {
    console.log("data: " + this.studentservice.getSelectedItems());
    if (this.studentservice.getSelectedItems().length > 0) {
      // this.item(this.studentservice.getSelectedItems());
      return this.studentservice.getSelectedItems();
    }
    return null;
  }
}