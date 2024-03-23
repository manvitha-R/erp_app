import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent    implements OnInit{

  FormGroup: any ;
  TotalRow: any;
  private fb: any;
  addfollow_up: any;
  routes: any;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.FormGroup = this.formbuilder.group({
      itemRows: this.formbuilder.array([this.initItemRow()]),
    });
  }
  initItemRow() {
    return this.formbuilder.group({
      Slno: [''],
      Person_name: [''],
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
   (this.addfollow_up.value).subscribe((data:any)=>{
      console.log(data);
      alert("Follow-up added successfully!!!!")
      this.routes.navigate(['/list-followup']);
  
    })
  
  }

}
