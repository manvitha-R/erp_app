import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-sale-ord',
  templateUrl: './add-sale-ord.component.html',
  styleUrls: ['./add-sale-ord.component.scss']
})
export class AddSaleOrdComponent    implements OnInit{

 
  addsales_ord: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService,)
{
  this.addsales_ord=this.fb.group({
    sales_ord_gst_type:['',Validators.required],
    sales_ord_cust_name:['',Validators.required],
    sales_ord_cust_email:['',Validators.required],
    sales_ord_salesmen:['',Validators.required],
    sales_ord_del_date:['',Validators.required],
    sales_ord_est_number:['',Validators.required],
    sales_ord_number:['',Validators.required],
    sales_ord_date:['',Validators.required],
    sales_ord_ref_number:['',Validators.required],
    sales_ord_ref_date:['',Validators.required],
    sales_ord_tax:['',Validators.required],
    sales_ord_item_val:['',Validators.required],
    sales_ord_discount: ['',Validators.required],
    sales_ord_cutting_chrgs: ['',Validators.required],
    sales_ord_taxable : ['',Validators.required],
    sales_ord_tax_amt : ['',Validators.required],
    sales_ord_cess_amt : ['',Validators.required],
    sales_ord_add_discount: ['',Validators.required],
    sales_ord_tcs: ['', Validators.required],
    sales_ord_roundoff: ['', Validators.required],
    sales_ord_doc_amt: ['', Validators.required],
   })   
}

ngOnInit(): void {
 
}


onSubmit(){
  
  console.log(this.addsales_ord.value);
  this.studentservice.addsales_ord(this.addsales_ord.value).subscribe((data:any)=>{
    console.log(data);
    alert("Sales-order added successfully!!!!")
    this.routes.navigate(['/list-sale']);
  })

}
}