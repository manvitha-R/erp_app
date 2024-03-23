import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-edit-followup',
  templateUrl: './edit-followup.component.html',
  styleUrls: ['./edit-followup.component.scss']
})
export class EditFollowupComponent implements OnInit{

  // tableRows: TableRow[] = [];
  addfollow_up: any;
  FormGroup: any ;
  TotalRow: any;
  id: any;
  enquiry: any;
  follow_up: any;
  form: any;
  serialnumber: number = 1;
  // private formbuilder: any;
  // FormGroup!: FormGroup;
  // TotalRow: Number | undefined;
  // private _fb: any;

constructor(private fb:FormBuilder,   private routes:Router,   private studentservice:StudentsService, private url: ActivatedRoute)
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
    remarks: ['',Validators.required],
   
   });

   
   
  //    this.FormGroup = this.fb.group({
  //   itemRows: this.fb.array([this.initItemRow()]),
  // });
}

incrementSerialNumber() {
  this.serialnumber++;
}
searchText = '';

ngOnInit(): void {
  // this.loadsStudent();
  // this.FormGroup = this.fb.group({
  // itemRows: this.fb.array([this.initItemRow()]),
  //  });

  //  additemRows(): void{
  //   const itemRows = this.form.get('itemRows') as FormArray;
  //   itemRows.push(this.createItem(items.length + 1));
  //  }

  //  createitemRows(slNo: number): this.FormGroup {
  //   return this.fb.group({
  //     sl_no: sl_No,
  //   });
  //  }

//  if (this.id) = this.url.snapshot.params['id'];
   
//   console.log(this.id);
//    this.studentservice.singleenquiry(this.id).subscribe(data =>{
//     this.addenquiry.patchValue(data);
//    })

  this.id = this.url.snapshot.params['id'];
  if (this.id) {
       
    console.log(this.id);
    // this.studentservice.singlefollowup(this.id).subscribe((data:any) => {
    //   this.addfollow_up.patchValue(data);
    // }) ;
    this.studentservice.singleenquiry(this.id).subscribe((data: any) => {
      this.addfollow_up.patchValue(data);
    });
  }
  
//   this.FormGroup = this.fb.group({
//     itemRows: this.fb.array([this.initItemRow()]),
//   });
//   if(this.id) {
//     console.log(this.id);
//     this.studentservice.singlefollowup(this.id).subscribe((data: any) =>{
//      this.addfollow_up.patchValue(data);
//    });
//  }
}
  createItem(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  initItemRow(): any {
    throw new Error('Method not implemented.');
  }


  // initItemRow() {
  //   return this.fb.group({
  //     sl_no: [''],
  //     person_name: [''],
  //     date: [''],
  //     remarks: ['']
  //   });
  // }

  // addNewRow() {
  //   const control = <FormArray>this.FormGroup.controls['itemRows'];
  //   control.push(this.initItemRow());
  // }

  // deleteRow(index: number){
  //   const control = <FormArray>this.FormGroup.controls['itemRows'];
  //   if (control !=null){
  //     this.TotalRow = control.value.length;
  //   }
  //   if (this.TotalRow > 1){
  //     control.removeAt(index);
  //     return true;
  //   } else {
  //     alert('One record is mandatory');
  //     return false;
  //   }
  // }


  onSubmit(){
  
    console.log(this.addfollow_up.value);
    this.studentservice.updateenquiry(this.id,this.addfollow_up.value).subscribe((data:any)=>{
      console.log(data);
      alert("Follow-Up added successfully!!!!")
      this.routes.navigate(['/list-followup']);
    })
  
  }

  // loadsStudent(){
  //   this.studentservice.listsfollowup().subscribe((data:any)=>{
  //     this.follow_up = data;
  //   })
  // }

 
}

function additemRows() {
  throw new Error('Function not implemented.');
}

function createitemRows(slNo: any, number: any) {
  throw new Error('Function not implemented.');
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