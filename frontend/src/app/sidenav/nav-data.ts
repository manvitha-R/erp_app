import { INavbarData } from "./helper"

export const navbarData: INavbarData[] = [
  {
    routelink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routelink: 'products',
    icon: 'fal fa-box-open',
    label: 'Master',
    items: [
      {
        routelink: 'list-roles',
        label : 'Roles',
      },
      {
        routelink: 'list-designation',
        label : 'Designation',
      },
      {
        routelink: 'list-department',
        label: 'Department',
      },
      {
        routelink: 'list-category',
        label : 'Category',
      },
      {
        routelink: 'list-subcat',
        label : 'Sub Category',
      },
      
      {
        routelink: 'list-status',
        label : 'Status',
      },
      {
        routelink: 'list-enquiry',
        label : 'Enquiry Mode',
      },
      {
        routelink: 'list-type',
        label : 'Enquiry Type',
      },
      {
        routelink: 'list-business',
        label : 'Business Type',
      },
      {
        routelink: 'list-user',
        label : 'User',
      },
      {
        routelink: 'list-master',
        label : 'Employee Master',
      },
      {
        routelink: 'list-customer',
        label : 'Customer Master',
      },
      {
        routelink: 'list-supplier',
        label : 'Supplier Master',
      },
    ]

  },
  {
    routelink: 'settings',
    icon: 'fal fa-home',
    label: 'Enquiry Master',
   
    items: [
      {
        routelink: 'enquiry-listt',
        label : 'Enquiry'
      },
      {
        routelink: 'list-followup',
        label : 'Follow Up'
      },

    ]
  },
  // {
  //   routelink: 'enquiry-listt',
  //   icon: 'fal fa-home',
  //   label: 'Enquiry'
  // },
  // {
  //   routelink: 'products',
  //   icon: 'fal fa-box-open',
  //   label: 'Master',
  //   items: [
  //     {
  //       routelink: 'products/statistics',
  //       label : 'Level 1.1',
  //       items: [
  //         {
  //         routelink: 'statistics',
  //         label : 'Level 2.1',
  //         },
  //         {
  //           routelink: 'add-roles',
  //           label : 'roles',
  //           },
  //         {
  //           routelink: 'products/level2.2',
  //           label : 'Level 2.2',
  //           },

  //       ]
  //     },
  //     {
  //       routelink: 'add-roles',
  //       label : 'roles',
  //     },
  //   ]
  // },
  // {
  //   routelink: '',
  //   icon: 'fal fa-chart-bar',
  //   label: 'Statistics'
  // },
  {
    routelink: 'settings',
    icon: 'fal fa-cog',
    label: 'Item Master',
   
    items: [
      {
        routelink: 'list-inventory',
        label : 'Inventory'
      },
      

    ]
  },
  {
    routelink: 'coupens',
    icon: 'fal fa-tags',
    label: 'Sales',
    items: [
      {
        routelink: 'list-estimate',
        label : 'Estimate'
      },
      {
        routelink: 'orderlost-list',
        label: 'Order Lost'
      },
      
      {
        routelink: 'list-sale',
        label : 'Sales Order'
      },
      // {
      //   routelink: 'list-exec',
      //   label : 'Sales Executive'
      // }
    ]
  },
  {
    routelink: '',
    icon: 'fal fa-cog',
    label: 'Purchase',

    items: [
      {
        routelink: 'purchase-reqlist',
        label : 'Purchase Requisition'
      },
      {
        routelink: 'purchase-list',
        label : 'Purchase Order'
      },
      {
        routelink: 'grn-list',
        label : 'GRN'
      },
     

    
    ]
  },
  {
    routelink: 'list-invoice',
    icon: 'fal fa-home',
    label: 'Invoice'
  },
  {
    routelink: 'list-dispatch',
    icon: 'fal fa-home',
    label: 'Dispatch'
  },
  {
    routelink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    expanded: false,
    items: [
      {
        routelink: 'destination',
        label : 'Profile'
      },
      {
        routelink: 'source',
        label : 'Customize'
      },

    ]
  }
];