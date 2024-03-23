import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { SettingsComponent } from './settings/settings.component';
import { AddRolesComponent } from './master/roles/add-roles/add-roles.component';
import { EditRolesComponent } from './master/roles/edit-roles/edit-roles.component';
import { ListRolesComponent } from './master/roles/list-roles/list-roles.component';
import { AddDesignationComponent } from './master/designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './master/designation/edit-designation/edit-designation.component';
import { ListDesignationComponent } from './master/designation/list-designation/list-designation.component';
import { AddSubcatComponent } from './master/subcategory/add-subcat/add-subcat.component';
import { EditSubcatComponent } from './master/subcategory/edit-subcat/edit-subcat.component';
import { ListSubcatComponent } from './master/subcategory/list-subcat/list-subcat.component';
import { AddCategoryComponent } from './master/category/add-category/add-category.component';
import { EditCategoryComponent } from './master/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './master/category/list-category/list-category.component';
import { AddStatusComponent } from './master/status/add-status/add-status.component';
import { EditStatusComponent } from './master/status/edit-status/edit-status.component';
import { ListStatusComponent } from './master/status/list-status/list-status.component';
import { AddEnquiryComponent } from './master/enquiry-mode/add-enquiry/add-enquiry.component';
import { EditEnquiryComponent } from './master/enquiry-mode/edit-enquiry/edit-enquiry.component';
import { ListEnquiryComponent } from './master/enquiry-mode/list-enquiry/list-enquiry.component';
import { AddEnqTypeComponent } from './master/enquiry-type/add-enq-type/add-enq-type.component';
import { EditEnqTypeComponent } from './master/enquiry-type/edit-enq-type/edit-enq-type.component';
import { ListEnqTypeComponent } from './master/enquiry-type/list-enq-type/list-enq-type.component';
import { AddBusinessComponent } from './master/business/add-business/add-business.component';
import { EditBusinessComponent } from './master/business/edit-business/edit-business.component';
import { ListBusinessComponent } from './master/business/list-business/list-business.component';
import { AddUserComponent } from './master/user/add-user/add-user.component';
import { EditUserComponent } from './master/user/edit-user/edit-user.component';
import { ListUserComponent } from './master/user/list-user/list-user.component';
import { AddEmpMasterComponent } from './master/employee-master/add-emp-master/add-emp-master.component';
import { EditMasterComponent } from './master/employee-master/edit-master/edit-master.component';
import { ListMasterComponent } from './master/employee-master/list-master/list-master.component';
import { AddCustMasterComponent } from './master/customer-master/add-cust-master/add-cust-master.component';
import { EditCustMasterComponent } from './master/customer-master/edit-cust-master/edit-cust-master.component';
import { ListCustMasterComponent } from './master/customer-master/list-cust-master/list-cust-master.component';
import { AddSupplierComponent } from './master/supplier-master/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './master/supplier-master/edit-supplier/edit-supplier.component';
import { ListSupplierComponent } from './master/supplier-master/list-supplier/list-supplier.component';
import { ListEstimateComponent } from './sales/estimate/list-estimate/list-estimate.component';
import { AddEstimateComponent } from './sales/estimate/add-estimate/add-estimate.component';
import { EditEstimateComponent } from './sales/estimate/edit-estimate/edit-estimate.component';
import { ItemBalanceComponent } from './item-balance/item-balance.component';
import { AddSaleOrdComponent } from './sales/sales order/add-sale-ord/add-sale-ord.component';
import { ListSaleOrdComponent } from './sales/sales order/list-sale-ord/list-sale-ord.component';
import { EditSaleOrdComponent } from './sales/sales order/edit-sale-ord/edit-sale-ord.component';
import { AddSaleExecComponent } from './sales/sales executive/add-sale-exec/add-sale-exec.component';
import { ListSaleExecComponent } from './sales/sales executive/list-sale-exec/list-sale-exec.component';
import { EditSaleExecComponent } from './sales/sales executive/edit-sale-exec/edit-sale-exec.component';
import { EnquiryAdddComponent } from './enquirys/enquiry-addd/enquiry-addd.component';
import { EnquiryListsComponent } from './enquirys/enquiry-lists/enquiry-lists.component';
import { EnquiryEdittComponent } from './enquirys/enquiry-editt/enquiry-editt.component';
import { GrnComponent } from './purchase/goods_recp_note/grn/grn.component';
import { GrnListComponent } from './purchase/goods_recp_note/grn-list/grn-list.component';
import { EditInvoiceComponent } from './sales/invoice/edit-invoice/edit-invoice.component';
import { AddInvoiceComponent } from './sales/invoice/add-invoice/add-invoice.component';
import { ListInvoiceComponent } from './sales/invoice/list-invoice/list-invoice.component';
import { ListInventoryComponent } from './item-master/inventory/list-inventory/list-inventory.component';
import { AddInventoryComponent } from './item-master/inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './item-master/inventory/edit-inventory/edit-inventory.component';
import { AddFollowupComponent } from './enquirys/add-followup/add-followup.component';
import { ListFollowupComponent } from './enquirys/list-followup/list-followup.component';
import { EditFollowupComponent } from './enquirys/edit-followup/edit-followup.component';
import { PurchaseReqComponent } from './purchase/purchase_requesition/purchase-req/purchase-req.component';
import { PurchaseOrderComponent } from './purchase/purchase_order/purchase-order/purchase-order.component';
import { AddDispatchComponent } from './sales/dispatch/add-dispatch/add-dispatch.component';
import { ListDispatchComponent } from './sales/dispatch/list-dispatch/list-dispatch.component';
import { OrderLostComponent } from './sales/order lost/order-lost/order-lost.component';
import { EditGrnComponent } from './purchase/goods_recp_note/edit-grn/edit-grn.component';
import { PurchaseListComponent } from './purchase/purchase_order/purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase/purchase_order/purchase-edit/purchase-edit.component';
import { PurchaseReqListComponent } from './purchase/purchase_requesition/purchase-req-list/purchase-req-list.component';
import { PurchaseReqEditComponent } from './purchase/purchase_requesition/purchase-req-edit/purchase-req-edit.component';
import { EditDispatchComponent } from './sales/dispatch/edit-dispatch/edit-dispatch.component';
import { TestRoleComponent } from './master/roles/test-role/test-role.component';
import { OrderlostEditComponent } from './sales/order lost/orderlost-edit/orderlost-edit.component';
import { OrderlostListComponent } from './sales/order lost/orderlost-list/orderlost-list.component';
import { PopupComponent } from './enquirys/popup/popup.component';
import { DestinationTableComponent } from './source/destination-table/destination-table.component';
import { SourceTableComponent } from './source/source-table/source-table.component';
import { TestingComponent } from './testing/testing.component';
import { DestinationComponent } from './enquirys/destination/destination.component';
import { EstimatePopupComponent } from './sales/estimate-popup/estimate-popup.component';
import { HistoryComponent } from './enquirys/history/history.component';
import { AddDepartmentComponent } from './master/department/add-department/add-department.component';
import { EditDepartmentComponent } from './master/department/edit-department/edit-department.component';
import { ListDepartmentComponent } from './master/department/list-department/list-department.component';
import { PopupTestComponent } from './enquirys/popup-test/popup-test.component';



const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard',component: DashboardComponent},
  {path:'products',component:ProductsComponent},
  {path:'statistics',component:StatisticsComponent},
  {path:'coupens', component:CoupensComponent},
  {path:'settings',component:SettingsComponent},
  {path:'add-roles',component:AddRolesComponent},
  {path:'edit-roles/:id',component:EditRolesComponent},
  {path:'list-roles',component:ListRolesComponent},
  {path:'add-designation',component:AddDesignationComponent},
  {path:'edit-designation/:id',component:EditDesignationComponent},
  {path:'list-designation',component:ListDesignationComponent},
  {path:'add-subcat',component:AddSubcatComponent},
  {path:'edit-subcat/:id',component:EditSubcatComponent},
  {path:'list-subcat',component:ListSubcatComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'edit-category/:id',component:EditCategoryComponent},
  {path:'list-category',component:ListCategoryComponent},
  {path:'add-status',component:AddStatusComponent},
  {path:'edit-status/:id',component:EditStatusComponent},
  {path:'list-status',component:ListStatusComponent},
  {path:'add-enquiry',component:AddEnquiryComponent},
  {path:'edit-enquiry/:id',component:EditEnquiryComponent},
  {path:'list-enquiry',component:ListEnquiryComponent},
  {path:'add-type',component:AddEnqTypeComponent},
  {path:'edit-type/:id',component:EditEnqTypeComponent},
  {path:'list-type',component:ListEnqTypeComponent},
  {path:'add-business',component:AddBusinessComponent},
  {path:'edit-business/:id',component:EditBusinessComponent},
  {path:'list-business',component:ListBusinessComponent},
{path:'add-user',component:AddUserComponent},
{path:'edit-user/:id',component:EditUserComponent},
{path:'list-user',component:ListUserComponent},
{path:'add-master',component:AddEmpMasterComponent},
{path:'edit-master/:id',component:EditMasterComponent},
{path:'list-master',component:ListMasterComponent},
{path:'add-customer',component:AddCustMasterComponent},
{path:'edit-customer/:id',component:EditCustMasterComponent},
{path:'list-customer',component:ListCustMasterComponent},
{path:'add-supplier',component:AddSupplierComponent},
{path:'edit-supplier/:id',component:EditSupplierComponent},
{path:'list-supplier',component:ListSupplierComponent},
{path:'list-estimate',component:ListEstimateComponent},
{path:'add-estimate',component:AddEstimateComponent},
{path:'edit-estimate/:id',component:EditEstimateComponent},
{path:'add-sale',component:AddSaleOrdComponent},
{path:'list-sale',component:ListSaleOrdComponent},
{path:'edit-sale/:id',component:EditSaleOrdComponent},
{path:'sale-exec',component:AddSaleExecComponent},
{path:'list-exec',component:ListSaleExecComponent},
{path:'edit-exec/:id',component:EditSaleExecComponent},
{path:'item',component:ItemBalanceComponent},
{path:'enquiry-add',component:EnquiryAdddComponent},
{path:'enquiry-listt',component:EnquiryListsComponent},
{path:'enquiry-edit/:id',component:EnquiryEdittComponent},
{path:'grn',component:GrnComponent},
{path:'grn-list',component:GrnListComponent},
{path:'edit-grn/:id',component:EditGrnComponent},
{path:'edit-invoice/:id',component:EditInvoiceComponent},
{path:'add-invoice',component:AddInvoiceComponent},
{path:'list-invoice',component:ListInvoiceComponent},
{path:'list-inventory',component:ListInventoryComponent},
{path:'add-inventory',component:AddInventoryComponent},
{path:'edit-inventory/:id',component:EditInventoryComponent},
{path:'add-followup',component:AddFollowupComponent},
{path:'list-followup',component:ListFollowupComponent},
{path:'edit-followup/:id',component:EditFollowupComponent},
{path:'purchase-req',component:PurchaseReqComponent},
{path:'purchase-reqlist',component:PurchaseReqListComponent},
{path:'purchase-order',component:PurchaseOrderComponent},
{path:'purchase-reqedit/:id',component:PurchaseReqEditComponent},
{path:'purchase-list',component:PurchaseListComponent},
{path:'purchase-edit/:id',component:PurchaseEditComponent},
{path:'dispatch',component:AddDispatchComponent},
{path:'list-dispatch',component:ListDispatchComponent},
{path:'edit-dispatch/:id',component:EditDispatchComponent},
{path:'order',component:OrderLostComponent},
{path:'test-role/:id',component:TestRoleComponent},
{path: 'orderlost-list',component:OrderlostListComponent},
{path: 'orderlost-edit/:id',component:OrderlostEditComponent},
{path: 'popup',component:PopupComponent},
{path:'destination',component:DestinationTableComponent},
{path:'source',component:SourceTableComponent},
{path:'test',component:TestingComponent},
{path:'dest',component:DestinationComponent},
{path:'estimate-popup',component:EstimatePopupComponent},
{path:'history',component:HistoryComponent},
{path: 'add-department', component: AddDepartmentComponent},
{path: 'edit-department/:id', component: EditDepartmentComponent},
{path: 'list-department', component: ListDepartmentComponent},
{path: 'popup_test/:_id', component:PopupTestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
