import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/enquirys/popup/popup.component';
import { StudentsService } from 'src/app/students.service';
import { EstimatePopupComponent } from '../../estimate-popup/estimate-popup.component';

@Component({
  selector: 'app-add-estimate',
  templateUrl: './add-estimate.component.html',
  styleUrls: ['./add-estimate.component.scss']
})
export class AddEstimateComponent  implements OnInit{

 
  addestimate: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,  private dialog: MatDialog)
{
  this.addestimate=this.fb.group({
    est_gst_cat:['',Validators.required],
    est_cust_name:['',Validators.required],
    est_cust_email:['',Validators.required],
    est_salesmen:['',Validators.required],
    est_enq_number:['',Validators.required],
    est_enq_date:['',Validators.required],
    est_date:['',Validators.required],
    est_number:['',Validators.required],
    est_ref_number:['',Validators.required],
    est_ref_date:['',Validators.required],
    est_tax:['',Validators.required],
    est_item_val:['',Validators.required],
    est_discount: ['',Validators.required],
    est_cutting_chrgs: ['',Validators.required],
    est_taxable : ['',Validators.required],
    est_tax_amt : ['',Validators.required],
    est_cess_amt : ['',Validators.required],
    est_add_discount: ['',Validators.required],
    est_tcs: ['', Validators.required],
    est_roundoff: ['', Validators.required],
    est_doc_amt: ['', Validators.required],
   })   
}

Openpopup(){
  this.dialog.open(EstimatePopupComponent,{
    width: '100%',
    height: '400px'
  })
}
ngOnInit(): void {
 
}
getSelectedItems() {
  return this.studentservice.getSelectedItems();
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
  
  console.log(this.addestimate.value);
  this.studentservice.addestimate(this.addestimate.value).subscribe((data:any)=>{
    console.log(data);
    alert("Estimate added successfully!!!!")
    this.routes.navigate(['/list-estimate']);
  })

}
}