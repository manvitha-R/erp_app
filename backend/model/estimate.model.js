const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let estimateSchema = new Schema({

    est_gst_cat: {
        type: String
    },
    est_cust_name: {
        type: String
    },
    est_cust_email: {
        type: String
    },
    est_salesmen: {
        type: String
    },
    est_enq_number: {
        type: String
    },
    est_enq_date: {
        type: String
    },
    est_date: {
        type: String
    },
    est_number: {
        type: String
    },
    est_ref_number: {
        type: String
    },
    est_ref_date: {
        type: String
    },
    est_tax: {
        type: String
    },
    est_item_val: {
        type: String
    },
    est_discount: {
        type: String
    },
    est_cutting_chrgs: {
        type: String
    },
    est_taxable: {
        type: String
    },
    est_tax_amt: {
        type: String
    },
    est_cess_amt: {
        type: String
    },
    est_add_discount: {
        type: String
    },
    est_tcs: {
        type: String
    },

    est_roundoff:{
        type: String
    },

    est_doc_amt: {
        type: String
    },

    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'estimate'
}
);
module.exports = mongoose.model('EstimateSchema', estimateSchema)