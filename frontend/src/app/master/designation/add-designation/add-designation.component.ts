import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.scss']
})
export class AddDesignationComponent implements OnInit{

 
  addRoles: any;
  addDesignation: any;
  constructor(private fb:FormBuilder,
   private routes:Router,
    private studentservice:StudentsService,
    private url: ActivatedRoute
    ) {
      this.addDesignation = fb.group(
        {
          designation_name:['',Validators.required],
         designation_desc:['',Validators.required]
        
        }
      )
    }
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.addDesignation.value);
    this.studentservice.adddesc(this.addDesignation.value).subscribe((data:any)=>{
      console.log(data);
      alert("Designation added successfully!!!!")
      this.routes.navigate(['/list-designation']);

    })

  }
}
