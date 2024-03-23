import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent   implements OnInit{

 
  addinvoice: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService, private url: ActivatedRoute)
{
  this.addinvoice=this.fb.group({
    invoice_gst_type:['',Validators.required],
    invoice_cash:['',Validators.required],
    invoice_warehouse:['',Validators.required],
    invoice_customer:['',Validators.required],
    invoice_email:['',Validators.required],
    invoice_date:['',Validators.required],
    invoice_number:['',Validators.required],
    // contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    invoice_refno:['',Validators.required],
    invoice_refdate:['',Validators.required],
    // phone1:['',Validators.required],
    invoice_salesman:['',Validators.required],
    invoice_tax : ['',Validators.required],
    invoice_payment : ['',Validators.required],
    invoice_due_date : ['',Validators.required],
    invoice_payment_link : ['',Validators.required],
    invoice_item_value: ['',Validators.required],
    invoice_discount: ['',Validators.required],
    invoice_cutt_chrg: ['',Validators.required],
    invoice_taxable: ['',Validators.required],
    invoice_tax_amnt: ['',Validators.required],
    invoice_cess_amnt: ['',Validators.required],
    invoice_add_disc: ['',Validators.required],
    invoice_tcs: ['',Validators.required],
    invoice_roundoff: ['',Validators.required],
    invoice_doc_amnt: ['',Validators.required],
   })   
}

ngOnInit(): void {
  
  this.id = this.url.snapshot.params['id'];
   
  console.log(this.id);
   this.studentservice.singleinvoice(this.id).subscribe(data =>{
    this.addinvoice.patchValue(data);
   })
 
}
// temp(checkValue: any){

//   if(checkValue){
//     console.log(this.addcustomer.value.address);
//     this.addcustomer.patchValue({
//       tempAddress: this.addcustomer.value.address,
//     });
    
//     this.addcustomer.patchValue({
//       tempCity: this.addcustomer.value.city,
//     });
//     this.addcustomer.patchValue({
//       tempState: this.addcustomer.value.state,
//     });
//     this.addcustomer.patchValue({
//       tempCountry: this.addcustomer.value.country,
//     });
//     this.addcustomer.patchValue({
//       tempPincode: this.addcustomer.value.pincode,
//     });
  
//   }
//   else {
//     this.addcustomer.patchValue({tempAddress: null});
    
//     this.addcustomer.patchValue({tempCity: null});
       
//     this.addcustomer.patchValue({tempState: null});
//     this.addcustomer.patchValue({tempCountry: null});
//     this.addcustomer.patchValue({tempPincode: null});
//   }
  
// }


onSubmit(){
  console.log(this.addinvoice.value);
  this.studentservice.updateinvoice(this.id,this.addinvoice.value).subscribe((data:any)=>{
    console.log(data);
    alert("Customer added successfully!!!!")
    this.routes.navigate(['/list-invoice']);

  })

}
}
