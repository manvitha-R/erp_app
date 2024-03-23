import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-dispatch',
  templateUrl: './add-dispatch.component.html',
  styleUrls: ['./add-dispatch.component.scss']
})
export class AddDispatchComponent   implements OnInit{

 
  adddispatch: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
{
  this.adddispatch=this.fb.group({
    disp_gst_type:['',Validators.required],
    disp_date:['',Validators.required],
    disp_warehouse:['',Validators.required],
    disp_number:['',Validators.required],
    disp_cust:['',Validators.required],
    disp_ref:['',Validators.required],
    disp_cust_email:['',Validators.required],
    disp_ref_date:['',Validators.required],
    disp_salesmen:['',Validators.required],
    disp_tax:['',Validators.required],
   
   })   
}

ngOnInit(): void {
 
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
  
  console.log(this.adddispatch.value);
  this.studentservice.adddispatch(this.adddispatch.value).subscribe((data:any)=>{
    console.log(data);
    alert("Dispatch added successfully!!!!")
    this.routes.navigate(['/list-dispatch']);
  })

}
}