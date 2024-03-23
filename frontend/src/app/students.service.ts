import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getEnquiryById: any;
  get(arg0: string): () => void {
    throw new Error('Method not implemented.');
  }
  private selectedRow: any;
  selectedItems$: any;
  listsemp() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  addRoles(role:any){
    return this.http.post('http://localhost:9090/endpoint/add-roles',role);
    
  }
  
  listsRoles(){
    return this.http.get('http://localhost:9090/endpoint/get-roles');
   }
  
   
   softdeleteRoles(id:any){
    return this.http.delete('http://localhost:9090/endpoint/soft-role/'+id);
   }
  
   singleRoles(id:any){
    return this.http.get('http://localhost:9090/endpoint/roles/'+id);
    
  }
  
  
  updateRoles(id:any,role:any){
    return this.http.put('http://localhost:9090/endpoint/update-role/'+id,role);
  }
  
  //designation

  adddesc(desc:any){
    return this.http.post('http://localhost:9090/endpoint/add-designation',desc);
    
  }
  listsdesc(){
    return this.http.get('http://localhost:9090/endpoint/get-designation');
   }
  
   
   softdeletedesc(id:any){
    return this.http.delete('http://localhost:9090/endpoint/soft-designation/'+id);
   }
  
  
   singledesc(id:any){
    return this.http.get('http://localhost:9090/endpoint/designation/'+id);
    
  }
  
  
  updatedesc(id:any,desc:any){
    return this.http.put('http://localhost:9090/endpoint/update-designation/'+id,desc);
  }
  


  //designation

  adddepartment(desc:any){
    return this.http.post('http://localhost:9090/endpoint/add-department',desc);
    
  }
  listsdepartment(){
    return this.http.get('http://localhost:9090/endpoint/get-department');
   }
  
   
   softdeletedepartment(id:any){
    return this.http.delete('http://localhost:9090/endpoint/soft-department/'+id);
   }
  
  
   singledepartment(id:any){
    return this.http.get('http://localhost:9090/endpoint/department/'+id);
    
  }
  
  
  updatedepartment(id:any,desc:any){
    return this.http.put('http://localhost:9090/endpoint/update-department/'+id,desc);
  }
  



  //Sub-Category
  addsubcat(desc:any){
    return this.http.post('http://localhost:9090/endpoint/add-subcategory',desc);
    
  }

  listssubcat(){
    return this.http.get('http://localhost:9090/endpoint/get-subcategory');
   }
  
   
   softdeletesubcat(id:any){
    return this.http.delete('http://localhost:9090/endpoint/soft-subcategory/'+id);
   }
  
  
   singlesubcat(id:any){
    return this.http.get('http://localhost:9090/endpoint/subcategory/'+id);
    
  }
  
  
  updatesubcat(id:any,desc:any){
    return this.http.put('http://localhost:9090/endpoint/update-subcategory/'+id,desc);
  }
  
//Category
addcat(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-category',desc);
  
}

listscat(){
  return this.http.get('http://localhost:9090/endpoint/get-category');
 }

 
 softdeletecat(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-category/'+id);
 }


 singlecat(id:any){
  return this.http.get('http://localhost:9090/endpoint/category/'+id);
  
}


updatecat(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-category/'+id,desc);
}


// Satus

addstatus(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-status',desc);
  
}

listsstatus(){
  return this.http.get('http://localhost:9090/endpoint/get-status');
 }

 
 softdeletestatus(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-status/'+id);
 }


 singlestatus(id:any){
  return this.http.get('http://localhost:9090/endpoint/status/'+id);
  
}


updatestatus(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-status/'+id,desc);
}


// Enquire Mode

addmode(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-enq_mode',desc);
  
}

listsmode(){
  return this.http.get('http://localhost:9090/endpoint/get-enq_mode');
 }

 
 softdeletemode(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-enq_mode/'+id);
 }


 singlemode(id:any){
  return this.http.get('http://localhost:9090/endpoint/enq_mode/'+id);
  
}


updatemode(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-enq_mode/'+id,desc);
}

//Enquiry Type


addtype(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-type',desc);
  
}

liststype(){
  return this.http.get('http://localhost:9090/endpoint/get-type');
 }

 
 softdeletetype(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-type/'+id);
 }


 singletype(id:any){
  return this.http.get('http://localhost:9090/endpoint/type/'+id);
  
}


updatetype(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-type/'+id,desc);
}

// Business


addbusiness(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-business',desc);
  
}

listsbusiness(){
  return this.http.get('http://localhost:9090/endpoint/get-business');
 }

 
 softdeletebusiness(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-business/'+id);
 }


 singlebusiness(id:any){
  return this.http.get('http://localhost:9090/endpoint/business/'+id);
  
}


updatebusiness(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-business/'+id,desc);
}

//user


adduser(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-user',desc);
  
}

listsuser(){
  return this.http.get('http://localhost:9090/endpoint/get-user');
 }

 
 softdeleteuser(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-user/'+id);
 }


 singleuser(id:any){
  return this.http.get('http://localhost:9090/endpoint/user/'+id);
  
}


updateuser(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-user/'+id,desc);
}

//Employee Master

addmaster(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-master',desc);
  
}

listsmaster(){
  return this.http.get('http://localhost:9090/endpoint/get-master');
 }

 
 softdeletemaster(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-master/'+id);
 }


 singlemaster(id:any){
  return this.http.get('http://localhost:9090/endpoint/master/'+id);
  
}


updatemaster(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-master/'+id,desc);
}

// Customer Master


addcustomer(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-customer',desc);
  
}

listscustomer(){
  return this.http.get('http://localhost:9090/endpoint/get-customer');
 }

 
 softdeletecustomer(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-customer/'+id);
 }


 singlecustomer(id:any){
  return this.http.get('http://localhost:9090/endpoint/customer/'+id);
  
}


updatecustomer(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-customer/'+id,desc);
}

// Supplier Master


addsupplier(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-supplier',desc);
  
}

listssupplier(){
  return this.http.get('http://localhost:9090/endpoint/get-supplier');
 }

 
 softdeletesupplier(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-supplier/'+id);
 }


 singlesupplier(id:any){
  return this.http.get('http://localhost:9090/endpoint/supplier/'+id);
  
}


updatesupplier(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-supplier/'+id,desc);
}


// SALES EXECUTIVE

addSalesExecutive(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-exec',desc);
  
}

listsSalesExecutive(){
  return this.http.get('http://localhost:9090/endpoint/get-exec');
 }

 
 softdeleteSalesExecutive(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-exec/'+id);
 }


 singlesaleexecutive(id:any){
  return this.http.get('http://localhost:9090/endpoint/sale_exec/'+id);
  
}


updatesaleexecutive(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-exec/'+id,desc);
}


// ITEM MASTER / INVENTORY


addinventory(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-inventroy',desc);
  
}

listsinventory(){
  return this.http.get('http://localhost:9090/endpoint/get-inventory');
 }

 
 softdeleteinventory(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-inventory/'+id);
 }


 singleinventory(id:any){
  return this.http.get('http://localhost:9090/endpoint/inventory/'+id);
  
}


updateinventory(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-inventory/'+id,desc);
}

// PURCHASE REQUISITION

addrequisition(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-requisition',desc);
  
}

listsrequisition(){
  return this.http.get('http://localhost:9090/endpoint/get-requisition');
 }

 
 softdeleterequisition(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-requisition/'+id);
 }


 singlerequisition(id:any){
  return this.http.get('http://localhost:9090/endpoint/requisition/'+id);
  
}


updaterequisition(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-requisition/'+id,desc);
}

// PURCHASE GRN


addgrn(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-grn',desc);
  
}

listsgrn(){
  return this.http.get('http://localhost:9090/endpoint/get-grn');
 }

 
 softdeletegrn(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-grn/'+id);
 }


 singlegrn(id:any){
  return this.http.get('http://localhost:9090/endpoint/grn/'+id);
  
}


updategrn(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-grn/'+id,desc);
}



// PURCHASE ORDER


addorder(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-order',desc);
  
}

listsorder(){
  return this.http.get('http://localhost:9090/endpoint/get-order');
 }

 
 softdeleteorder(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-order/'+id);
 }


 singleorder(id:any){
  return this.http.get('http://localhost:9090/endpoint/order/'+id);
  
}


updateorder(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-order/'+id,desc);
}


// INVOICE


addinvoice(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-invoice',desc);
  
}

listsinvoice(){
  return this.http.get('http://localhost:9090/endpoint/get-invoice');
 }

 
 softdeleteinvoice(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-invoice/'+id);
 }


 singleinvoice(id:any){
  return this.http.get('http://localhost:9090/endpoint/invoice/'+id);
  
}


updateinvoice(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-invoice/'+id,desc);
}

// ENQUIRY

addenquiry(desc:any){
  return this.http.post('http://localhost:9090/endpoint/enquiry-add',desc);
}

listenquiry(){
  return this.http.get('http://localhost:9090/endpoint/get-enquiry');
 }

 softdeleteenquiry(id:any){
  return this.http.delete('http://localhost:9090/endpoint/enquiry-soft/'+id);
 }

 singleenquiry(id:any){
  return this.http.get('http://localhost:9090/endpoint/enquiry/'+id);
  
}

updateenquiry(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-enquiry/'+id,desc);
  
}

// ESTIMATE 


addestimate(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-estimate',desc);
  
}

listsestimate(){
  return this.http.get('http://localhost:9090/endpoint/get-estimate');
 }

 
 softdeleteestimate(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-estimate/'+id);
 }


 singleestimate(id:any){
  return this.http.get('http://localhost:9090/endpoint/estimate/'+id);
  
}


updateestimate(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-estimate/'+id,desc);
}

// SALES-ORDER


addsales_ord(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-sales_ord',desc);
  
}

listssales_ord(){
  return this.http.get('http://localhost:9090/endpoint/get-sales_ord');
 }

 
 softdeletesales_ord(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-sales_ord/'+id);
 }


 singlesales_ord(id:any){
  return this.http.get('http://localhost:9090/endpoint/sales_ord/'+id);
  
}


updatesales_ord(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-sales_ord/'+id,desc);
}

// DISPATCH


adddispatch(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-dispatch',desc);
  
}

listsdispatch(){
  return this.http.get('http://localhost:9090/endpoint/get-dispatch');
 }

 
 softdeletedispatch(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-dispatch/'+id);
 }


 singledispatch(id:any){
  return this.http.get('http://localhost:9090/endpoint/dispatch/'+id);
  
}


updatedispatch(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-dispatch/'+id,desc);
}

// FOLLOW UP  LIST

addfollowup(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-followup',desc);
  
}

listsfollowup(){
  return this.http.get('http://localhost:9090/endpoint/get-followup');
 }

 
 softdeletefollowup(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-followup/'+id);
 }


 singlefollowup(id:any){
  return this.http.get('http://localhost:9090/endpoint/followup/'+id);
  
}


updatefollowup(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-followup/'+id,desc);
}


// ITEM  LIST

additem(desc:any){
  return this.http.post('http://localhost:9090/endpoint/add-item',desc);
  
}

listsitem(){
  return this.http.get('http://localhost:9090/endpoint/get-item');
 }

 
 softdeleteitem(id:any){
  return this.http.delete('http://localhost:9090/endpoint/soft-item/'+id);
 }


 singleitem(id:any){
  return this.http.get('http://localhost:9090/endpoint/item/'+id);
  
}


updateitem(id:any,desc:any){
  return this.http.put('http://localhost:9090/endpoint/update-item/'+id,desc);
}
// DATA



savedata(desc:any){
  return this.http.post('http://localhost:9090/endpoint/inventory-save',desc);
  
}

listsdata(){
  return this.http.get('http://localhost:9090/endpoint/get-data');
 }

 
//  softdeletedispatch(id:any){
//   return this.http.delete('http://localhost:9090/endpoint/soft-dispatch/'+id);
//  }


//  singledispatch(id:any){
//   return this.http.get('http://localhost:9090/endpoint/dispatch/'+id);
  
// }


// updatedispatch(id:any,desc:any){
//   return this.http.put('http://localhost:9090/endpoint/update-dispatch/'+id,desc);
// }


storeRow(row: any) {
  return this.http.post('http://localhost:9090/endpoint/store-row',row);
//   (`${this.}/store-row`, row);
}

getSelectedRow(): any {
  return this.selectedRow;
  console.log('selectedRow:' ,this.getSelectedRow);
}

setSelectedRow(row: any): void {
  this.selectedRow = row;
}

// TESTING POPUP CHECK BOX
selectedItems: any[] = [];
// selectedRows: any[] = [];
addSelectedItem(item: any) {
  // console.log('inside addseleceted items');
  // console.log(item);

  this.selectedItems.push(item);
}

// setSelectedItem(item:any) {
//   this.selectedItems.next(item);
// }

itemsArray(): any {
//   console.log('inside getseleceted items');
//  console.log(this.selectedItems);
  return this.selectedItems;
}

clearSelectedItems() {
  this.selectedItems = [];
}
setSelectedItems(items: any[]) {
  this.selectedItems = items;
}
getSelectedItems(): any[] {
  return this.selectedItems;
}


saveEnquiryData(data: any): Observable<any> {
  return this.http.post<any>('http://localhost:9090/endpoint/get-enquiry', data);
}

getitemsArray() :any{
   this.itemsArray();
  //  console.log('Items Array:', this.getitemsArray());
}

  // addSelectedRow(row: any) {
  //   this.selectedRows.push(row);
  // }

  // getSelectedRows() {
  //   return this.selectedRows;
  // }

  // clearSelectedRows() {
  //   this.selectedRows = [];
  // }
}
