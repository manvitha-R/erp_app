import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-grn',
  templateUrl: './edit-grn.component.html',
  styleUrls: ['./edit-grn.component.scss']
})
export class EditGrnComponent   implements OnInit{
  addgrn: any;
  id: any;
  
   
    // addcustomer: any;
  
  constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,    private url: ActivatedRoute)
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

    this.id = this.url.snapshot.params['id'];
   
    console.log(this.id);
     this.studentservice.singlegrn(this.id).subscribe(data =>{
      this.addgrn.patchValue(data);
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
    console.log(this.addgrn.value);
    this.studentservice.updategrn(this.id,this.addgrn.value).subscribe((data:any)=>{
      console.log(data);
      alert("GRN Updated successfully!!!!")
      this.routes.navigate(['/grn-list']);

    })

  
  }
  }
