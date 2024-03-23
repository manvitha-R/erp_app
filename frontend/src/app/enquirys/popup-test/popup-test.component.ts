import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-test',
  templateUrl: './popup-test.component.html',
  styleUrls: ['./popup-test.component.scss']
})
export class PopupTestComponent implements OnInit{

 
  // addcustomer: any;
  addinventory: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,      private url: ActivatedRoute)
{
  this.addinventory = this.fb.group({
    item_model_no: ['', Validators.required],
    item_name:['',Validators.required],
    item_balance:['',Validators.required],
    item_seq:['',Validators.required],
    item_desc:['',Validators.required],
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
    item_lead_time: ['',Validators.required],
    item_disc_value: ['', Validators.required],


  })   
}

ngOnInit(): void {
  this.id = this.url.snapshot.params['id'];
   
  console.log(this.id);
   this.studentservice.singleinventory(this.id).subscribe(data =>{
    this.addinventory.patchValue(data);
   });

   this.addinventory.get('item_amount').valueChanges.subscribe(() => {
    this.calculateDiscountValue();
  });
  
  this.addinventory.get('item_disc').valueChanges.subscribe(() => {
    this.calculateDiscountValue();
  });
  
  this.addinventory.get('item_net_rate').valueChanges.subscribe(() => {
    this.calculateTaxAmount();
  });
  this.addinventory.get('item_net_rate').valueChanges.subscribe(() => {
    this.calculateTax();
  });
  this.addinventory.get('item_sgst').valueChanges.subscribe(() => {
    this.calculateTax();
  });
 
}


calculateDiscountValue() {
  const amount = this.addinventory.get('item_amount').value;
  const discountRate = this.addinventory.get('item_disc').value;

   // Calculate the discount value
   const discountValue = (amount * discountRate) / 100;

   // Update the value of the "Discount Value" form control
   this.addinventory.get('item_disc_value').setValue(discountValue);
}

calculateTaxAmount(){
  const netRate = this.addinventory.get('item_net_rate').value;

   // Calculate the tax amount
   const taxAmount = (netRate * 18)/ 100;

   // Update the value of the "Tax Amount" form control
   this.addinventory.get('item_tax_amt').setValue(taxAmount);

}

calculateTax() {
  const taxAmount = this.addinventory.get('item_tax_amt').value;
  //calculate the sgst
  const sgst = taxAmount / 2;
  // const igst = taxAmount / 2;
  const cgst = taxAmount / 2;
  // Update the value of the "SGST" form control
  this.addinventory.get('item_sgst').setValue(sgst);
  this.addinventory.get('item_cgst').setValue(cgst);
  // this.addinventory.get('item_igst').setValue(igst);

}

onSubmit(){
  console.log(this.addinventory.value);
  this.studentservice.updateinventory(this.id,this.addinventory.value).subscribe((data:any)=>{
    console.log(data);
    alert("Item Updated successfully!!!!")
    this.routes.navigate(['/enquiry-add']);

  })

}
}