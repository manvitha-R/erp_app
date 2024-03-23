import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';


// Define an interface for the Enquiry data
// interface Enquiry {
//   enq_on: string;
//   enq_cust_name: string;
//   enq_by: string;
//   enq_type: string;
//   enq_date: string;
//   enq_reference: string;
//   enq_sales_co_ord: string;
//   status: string;
//   item_model_no: string;
//   item_name: string;
//   item_desc: string;
//   item_balance: string;
//   item_seq: string;
//   item_code: string;
//   item_hsn_code: string;
//   item_unit: string;
//   item_qty: string;
//   item_rate: string;
//   item_mrp: string;
//   item_amount: string;
//   item_disc: string;
//   item_net_rate: string;
//   item_eff_rate: string;
//   item_eff_value: string;
//   item_tax_code: string;
//   item_tax_rate: string;
//   item_taxable: string;
//   item_cess_calc: string;
//   item_posting_gl: string;
//   item_tax_amt: string;
//   item_install_req: string;
//   item_make: string;
//   item_sales_rate: string;
//   item_igst: string;
//   item_cgst: string;
//   item_sgst: string;
//   item_markup: string;
//   item_markup_per: string;
//   item_war_months: string;
//   item_disc_value: string;
//   item_lead_time: string;
// }

// // Define an interface for the Enquiry response data
// interface EnquiryResponse {
//   enq_on: string;
//   enq_cust_name: string;
//   enq_by: string;
//   enq_type: string;
//   enq_date: string;
//   enq_reference: string;
//   enq_sales_co_ord: string;
//   status: string;
//   items: Enquiry[]; // Define the 'items' property as an array of Enquiry objects
// }

@Component({
  selector: 'app-enquiry-editt',
  templateUrl: './enquiry-editt.component.html',
  styleUrls: ['./enquiry-editt.component.scss']
})


export class EnquiryEdittComponent   implements OnInit{
  addenquiry: any;
  id: any;
  item: any;
  enq: any;
  enquiry: any;
  searchText = '';
  // item_model_no!: string;
  // items: Enquiry[] = [];
constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,   private url: ActivatedRoute)
{
  this.addenquiry=this.fb.group({
    enq_on:['',Validators.required],
    enq_cust_name: ['', Validators.required],
    enq_by:['',Validators.required],
    enq_type:['', Validators.required],
    enq_date:['',Validators.required],
    enq_reference:['',Validators.required],
    enq_sales_co_ord:['',Validators.required],
    status:['',Validators.required],
    item_model_no: ['', Validators.required],
  item_name: ['', Validators.required],
  item_desc: ['', Validators.required],
  item_balance:['',Validators.required],
  item_seq:['',Validators.required],
  // item_desc:['',Validators.required],
  item_code:['',Validators.required],
  item_hsn_code:['',Validators.required],
  item_unit : ['',Validators.required],
  item_qty : ['',Validators.required],
  item_rate : ['',Validators.required],
  item_mrp : ['',Validators.required],
  item_amount : ['',Validators.required],
  item_disc : ['',Validators.required],
  item_net_rate : ['',Validators.required],
  item_eff_rate : ['',Validators.required],
  item_eff_value : ['',Validators.required],
  item_tax_code : ['',Validators.required],
  item_tax_rate : ['',Validators.required],
  item_taxable : ['',Validators.required],
  item_cess_calc : ['',Validators.required],
  item_posting_gl: ['', Validators.required],
  item_tax_amt: ['',Validators.required],
  item_install_req: ['', Validators.required],
  item_make: ['',Validators.required],
  item_sales_rate: ['',Validators.required],
  item_igst : ['',Validators.required],
  item_cgst : ['',Validators.required],
  item_sgst : ['',Validators.required],
  item_markup : ['',Validators.required],
  item_markup_per : ['',Validators.required],
  item_war_months : ['',Validators.required],
  item_disc_value: ['',Validators.required],
  item_lead_time: ['', Validators.required],
   })   
}


ngOnInit(): void {
  this.id = this.url.snapshot.params['id'];
   console.log(this.id);
   this.studentservice.singleenquiry(this.id).subscribe((data) => {
    this.addenquiry.patchValue(data);
    this.studentservice.itemsArray();
   });
  
 
}

onSubmit(){
  // const selectedItems = this.studentservice.getSelectedItems();
  const formValue = {...this.addenquiry.value, items: this.studentservice.itemsArray()};
  console.log(formValue);
  // console.log(this.addenquiry.value);
  

  this.studentservice.updateenquiry(this.id,this.addenquiry.value).subscribe((data:any)=>{
    console.log(data);
    alert("Enquiry updated successfully!!!!")
    this.routes.navigate(['/enquiry-listt']);

  }),
(error: any) => {
  console.error('Error:', error);
}

}

getSelectedItems() {
  return this.studentservice.itemsArray();
}
}
