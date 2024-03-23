import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-cust-master',
  templateUrl: './add-cust-master.component.html',
  styleUrls: ['./add-cust-master.component.scss']
})
export class AddCustMasterComponent    implements OnInit{

 
  addcustomer: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
{
  this.addcustomer=this.fb.group({
    cust_name:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    pincode:['',Validators.required],
    cust_phn:['',Validators.required],
    // contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    cust_email:['',Validators.required],
    cust_gst_number:['',Validators.required],
    // phone1:['',Validators.required],
    cust_cin_number:['',Validators.required],
    tempAddress : ['',Validators.required],
    tempCity : ['',Validators.required],
    tempState : ['',Validators.required],
    tempCountry : ['',Validators.required],
    tempPincode : ['',Validators.required],
   })   
}

ngOnInit(): void {
 
}
temp(checkValue: any){

  if(checkValue){
    console.log(this.addcustomer.value.address);
    this.addcustomer.patchValue({
      tempAddress: this.addcustomer.value.address,
    });
    
    this.addcustomer.patchValue({
      tempCity: this.addcustomer.value.city,
    });
    this.addcustomer.patchValue({
      tempState: this.addcustomer.value.state,
    });
    this.addcustomer.patchValue({
      tempCountry: this.addcustomer.value.country,
    });
    this.addcustomer.patchValue({
      tempPincode: this.addcustomer.value.pincode,
    });
  
  }
  else {
    this.addcustomer.patchValue({tempAddress: null});
    
    this.addcustomer.patchValue({tempCity: null});
       
    this.addcustomer.patchValue({tempState: null});
    this.addcustomer.patchValue({tempCountry: null});
    this.addcustomer.patchValue({tempPincode: null});
  }
  
}


onSubmit(){
  console.log(this.addcustomer.value);
  this.studentservice.addcustomer(this.addcustomer.value).subscribe((data:any)=>{
    console.log(data);
    alert("Customer added successfully!!!!")
    this.routes.navigate(['/list-customer']);

  })

}
}