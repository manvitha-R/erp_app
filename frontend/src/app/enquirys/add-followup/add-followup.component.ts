import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-followup',
  templateUrl: './add-followup.component.html',
  styleUrls: ['./add-followup.component.scss']
})
export class AddFollowupComponent      implements OnInit{

  // tableRows: TableRow[] = [];
  addfollow_up: any;
  FormGroup!: any ;
  TotalRow: any;
  // private formbuilder: any;
  // FormGroup!: FormGroup;
  // TotalRow: Number | undefined;
  // private _fb: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService, )
{
  this.addfollow_up=this.fb.group({
    enq_on:['',Validators.required],
    enq_by:['',Validators.required],
    enq_date:['',Validators.required],
    enq_reference:['',Validators.required],
    enq_sales_co_ord:['',Validators.required],
    status:['',Validators.required],
    sl_no:['',Validators.required],
    date:['',Validators.required],
    person_name: ['',Validators.required],
    remark: ['',Validators.required],
   
   })   
}

ngOnInit(): void {
  this.FormGroup = this.fb.group({
    itemRows: this.fb.array([this.initItemRow()]),
  });

  }
  initItemRow() {
    return this.fb.group({
      Slno: [''],
      Personname: [''],
      Date: [''],
      Remarks: ['']
    });
  }

  addNewRow() {
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.push(this.initItemRow());
  }

  deleteRow(index: number){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    if (control !=null){
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1){
      control.removeAt(index);
      return true;
    } else {
      alert('One record is mandatory');
      return false;
    }
  }


  onSubmit(){
  
    console.log(this.addfollow_up.value);
    this.studentservice.addfollowup(this.addfollow_up.value).subscribe((data:any)=>{
      console.log(data);
      alert("Follow-Up added successfully!!!!")
      this.routes.navigate(['/list-followup']);
    })
  
  }
 
}
  // initItemRow() {
  //   return this._fb.group({
  //     SlNo: [''],
  //     Date: [''],
  //     PersonName:[''],
  //     Remark: ['']
  //   })
  // }
  // addNewRow() {
  //   const control = <FormArray>this.FormGroup.controls['itemRows'];
  //   control.push(this.initItemRow());
  // }

// addRow() {
//   const newRow: TableRow = {
//     fol_up_sl_no: this.tableRows.length +1,
//     fol_up_date: '',
//     fol_up_person_name: '',
//     fol_up_remark: ''
//   };
//   this.tableRows.push(newRow);
// }