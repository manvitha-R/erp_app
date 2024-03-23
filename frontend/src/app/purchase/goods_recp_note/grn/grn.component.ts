import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GrnComponent implements OnInit{
addgrn: any;

 
  // addcustomer: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
{
  this.addgrn=this.fb.group({
    pur_grn_gst_type:['',Validators.required],
    pur_grn_vendor:['',Validators.required],
    pur_grn_email:['',Validators.required],
    pur_grn_date:['',Validators.required],
    pur_grn_number:['',Validators.required],
    pur_grn_ref_date:['',Validators.required],
    pur_grn_ref_number:['',Validators.required],
    // contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    pur_grn_tax:['',Validators.required],
  
   })   
}

ngOnInit(): void {
 
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
  console.log(this.addgrn.value);
  this.studentservice.addgrn(this.addgrn.value).subscribe((data:any)=>{
    console.log(data);
    alert("GRN added successfully!!!!")
    this.routes.navigate(['/grn-list']);

  })

}
}