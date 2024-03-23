import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';




@Component({
  selector: 'app-test-role',
  templateUrl: './test-role.component.html',
  styleUrls: ['./test-role.component.scss']
})
export class TestRoleComponent implements OnInit {


  displayedColumns: string[] = [ 'role_name', 'role_desc', 'action'];
  dataSource = new MatTableDataSource<any>;
  id:number | undefined;
 

 
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  roles: any;
  element: any;
  
  constructor(private studentservice:StudentsService){}
  ngOnInit(): void {
    this.listsRoles();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
    
  // }

  listsRoles(){
  this.studentservice.listsRoles().subscribe({
    next:(res)=>{
      console.log(res);
this.dataSource=new MatTableDataSource<any>(res as any[]);
this.dataSource.paginator=this.paginator;
this.dataSource.sort = this.sort;
 
    },
    error:console.log,
  });
}


deleteroles(_id:number){
  if(confirm('Are you sure you want to delete role?'))
  this.studentservice.softdeleteRoles(_id).subscribe({
    next:(res)=>{
      alert ("Role deleted successfully!");
      this.listsRoles();
    },
    error:console.log,
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
