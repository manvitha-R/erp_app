import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent  implements OnInit{

 
  addsupplier: any;
  id: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService, private url: ActivatedRoute)
{
  this.addsupplier=this.fb.group({
    supplier_name:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    pincode:['',Validators.required],
    supplier_phn:['',Validators.required],
    // contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    supplier_email:['',Validators.required],
    supplier_gst_number:['',Validators.required],
    // phone1:['',Validators.required],
    supplier_cin_number:['',Validators.required],
    tempAddress : ['',Validators.required],
    tempCity : ['',Validators.required],
    tempState : ['',Validators.required],
    tempCountry : ['',Validators.required],
    tempPincode : ['',Validators.required],
   })   
}

ngOnInit(): void {
  this.id = this.url.snapshot.params['id'];
   
  console.log(this.id);
   this.studentservice.singlesupplier(this.id).subscribe(data =>{
    this.addsupplier.patchValue(data);
   })
 
}
temp(checkValue: any){

  if(checkValue){
    console.log(this.addsupplier.value.address);
    this.addsupplier.patchValue({
      tempAddress: this.addsupplier.value.address,
    });
    
    this.addsupplier.patchValue({
      tempCity: this.addsupplier.value.city,
    });
    this.addsupplier.patchValue({
      tempState: this.addsupplier.value.state,
    });
    this.addsupplier.patchValue({
      tempCountry: this.addsupplier.value.country,
    });
    this.addsupplier.patchValue({
      tempPincode: this.addsupplier.value.pincode,
    });
  
  }
  else {
    this.addsupplier.patchValue({tempAddress: null});
    
    this.addsupplier.patchValue({tempCity: null});
       
    this.addsupplier.patchValue({tempState: null});
    this.addsupplier.patchValue({tempCountry: null});
    this.addsupplier.patchValue({tempPincode: null});
  }
  
}


onSubmit(){
  console.log(this.addsupplier.value);
  this.studentservice.updatesupplier(this.id,this.addsupplier.value).subscribe((data:any)=>{
    console.log(data);
    alert("Employee added successfully!!!!")
    this.routes.navigate(['/list-supplier']);

  })

}
}