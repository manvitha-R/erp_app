import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent    implements OnInit{

 
  // addestimate: any;
  addorder: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,   private url: ActivatedRoute)
{
  this.addorder=this.fb.group({
    pur_ord_gst_type:['',Validators.required],
    pur_ord_date:['',Validators.required],
    pur_ord_vendor:['',Validators.required],
    pur_ord_order_no:['',Validators.required],
    pur_ord_email:['',Validators.required],
    pur_ord_refference:['',Validators.required],
    pur_ord_del_date:['',Validators.required],
    pur_ord_ref_date:['',Validators.required],
    pur_ord_agent:['',Validators.required],
    pur_ord_tax:['',Validators.required],
    pur_ord_item_val:['',Validators.required],
    pur_ord_discount: ['',Validators.required],
    pur_ord_cutting_chrgs: ['',Validators.required],
    pur_ord_taxable : ['',Validators.required],
    pur_ord_tax_amnt : ['',Validators.required],
    pur_ord_cess_amnt : ['',Validators.required],
    pur_ord_add_discount: ['',Validators.required],
    pur_ord_tcs: ['', Validators.required],
    pur_ord_round_off: ['', Validators.required],
    pur_ord_doc_amnt: ['', Validators.required],
   })   
}

ngOnInit(): void {
  this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singleorder(this.id).subscribe(data =>{
      this.addorder.patchValue(data);
     })
 
}
// temp(checkValue: any){

//   if(checkValue){
//     console.log(this.addestimate.value.address);
//     this.addestimate.patchValue({
//       tempAddress: this.addestimate.value.address,
//     });
    
//     this.addestimate.patchValue({
//       tempCity: this.addestimate.value.city,
//     });
//     this.addestimate.patchValue({
//       tempState: this.addestimate.value.state,
//     });
//     this.addestimate.patchValue({
//       tempCountry: this.addestimate.value.country,
//     });
//     this.addestimate.patchValue({
//       tempPincode: this.addestimate.value.pincode,
//     });
  
//   }
//   else {
//     this.addestimate.patchValue({tempAddress: null});
    
//     this.addestimate.patchValue({tempCity: null});
       
//     this.addestimate.patchValue({tempState: null});
//     this.addestimate.patchValue({tempCountry: null});
//     this.addestimate.patchValue({tempPincode: null});
//   }
  
// }


onSubmit(){
  
  console.log(this.addorder.value);
  this.studentservice.updateorder(this.id,this.addorder.value).subscribe((data:any)=>{
    console.log(data);
    alert("Estimate added successfully!!!!")
    this.routes.navigate(['/purchase-list']);
  })

}
}
