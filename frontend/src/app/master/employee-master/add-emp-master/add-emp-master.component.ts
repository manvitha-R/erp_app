import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-emp-master',
  templateUrl: './add-emp-master.component.html',
  styleUrls: ['./add-emp-master.component.scss']
})
export class AddEmpMasterComponent implements OnInit{

  addmaster: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
{
  this.addmaster=this.fb.group({
    employee_name:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    pincode:['',Validators.required],
    phone_number:['',Validators.required],
    // contact:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
    email:['',Validators.required],
    pan_number:['',Validators.required],
    // phone1:['',Validators.required],
    aadhar_number:['',Validators.required],
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
    console.log(this.addmaster.value.address);
    this.addmaster.patchValue({
      tempAddress: this.addmaster.value.address,
    });
    
    this.addmaster.patchValue({
      tempCity: this.addmaster.value.city,
    });
    this.addmaster.patchValue({
      tempState: this.addmaster.value.state,
    });
    this.addmaster.patchValue({
      tempCountry: this.addmaster.value.country,
    });
    this.addmaster.patchValue({
      tempPincode: this.addmaster.value.pincode,
    });
  
  }
  else {
    this.addmaster.patchValue({tempAddress: null});
    
    this.addmaster.patchValue({tempCity: null});
       
    this.addmaster.patchValue({tempState: null});
    this.addmaster.patchValue({tempCountry: null});
    this.addmaster.patchValue({tempPincode: null});
  }
  
}


onSubmit(){
  console.log(this.addmaster.value);
  this.studentservice.addmaster(this.addmaster.value).subscribe((data:any)=>{
    console.log(data);
    alert("Employee added successfully!!!!")
    this.routes.navigate(['/list-master']);

  })

}
}