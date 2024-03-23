import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-purchase-req-edit',
  templateUrl: './purchase-req-edit.component.html',
  styleUrls: ['./purchase-req-edit.component.scss']
})
export class PurchaseReqEditComponent   implements OnInit{

 
  // addestimate: any;
  addrequisition: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService, private url: ActivatedRoute)
{
  this.addrequisition=this.fb.group({
    pur_req_requester:['',Validators.required],
    pur_req_date:['',Validators.required],
    pur_req_voucher_no:['',Validators.required],
   
   })   
}

ngOnInit(): void {

  this.id = this.url.snapshot.params['id'];
   
  console.log(this.id);
   this.studentservice.singlerequisition(this.id).subscribe(data =>{
    this.addrequisition.patchValue(data);
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
  
  console.log(this.addrequisition.value);
  this.studentservice.updaterequisition(this.id,this.addrequisition.value).subscribe((data:any)=>{
    console.log(data);
    alert("Purchase Requisition Updated successfully!!!!")
    this.routes.navigate(['/purchase-reqlist']);
  })

}
}