import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-estimate',
  templateUrl: './edit-estimate.component.html',
  styleUrls: ['./edit-estimate.component.scss']
})
export class EditEstimateComponent   implements OnInit{

 
  addestimate: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,     private url: ActivatedRoute)
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

ngOnInit(): void {

  this.id = this.url.snapshot.params['id'];
   
  console.log(this.id);
   this.studentservice.singleestimate(this.id).subscribe(data =>{
    this.addestimate.patchValue(data);
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
  
  console.log(this.addestimate.value);
  this.studentservice.updateestimate(this.id,this.addestimate.value).subscribe((data:any)=>{
    console.log(data);
    alert("Estimate updated successfully!!!!")
    this.routes.navigate(['/list-estimate']);
  })

}
}