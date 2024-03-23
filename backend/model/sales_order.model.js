const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sales_ordSchema = new Schema({

    sales_ord_gst_type: {
        type: String
    },
    sales_ord_cust_name: {
        type: String
    },
    sales_ord_cust_email: {
        type: String
    },
    sales_ord_salesmen: {
        type: String
    },
    sales_ord_del_date: {
        type: String
    },
    sales_ord_est_number: {
        type: String
    },
    sales_ord_date: {
        type: String
    },
    sales_ord_number: {
        type: String
    },
    sales_ord_ref_number: {
        type: String
    },
    sales_ord_ref_date: {
        type: String
    },
    sales_ord_tax: {
        type: String
    },
    sales_ord_item_val: {
        type: String
    },
    // est_item_val: {
    //     type: String
    // },
    sales_ord_discount: {
        type: String
    },
    sales_ord_cutting_chrgs: {
        type: String
    },
    sales_ord_taxable: {
        type: String
    },
    sales_ord_tax_amt: {
        type: String
    },
    sales_ord_cess_amt: {
        type: String
    },
    sales_ord_add_discount: {
        type: String
    },
    sales_ord_tcs: {
        type: String
    },

    sales_ord_roundoff:{
        type: String
    },

    sales_ord_doc_amt: {
        type: String
    },

    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'sales_order'
}
);
module.exports = mongoose.model('Sales_ordSchema', sales_ordSchema)