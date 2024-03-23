const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let enquirySchema = new Schema({
    enq_on: {
        type: String
    },
    enq_cust_name: {
        type: String
    },
    enq_type:{
        type: String
    },
    enq_by: {
        type: String
    },
    enq_date: {
        type: String,
      
    },
    enq_reference: {
        type: String
    },
    enq_sales_co_ord: {
        type: String
    },
    status: {
        type: String
    },

    items: [{
        item_model_no: String,
        item_name: String,
        item_desc: String,
        item_balance: String,
        item_seq: String,
        item_code: String,
        item_hsn_code: String,
        item_unit: String,
        item_qty: String,
        item_rate: String,
        item_mrp: String,
        item_amount: String,
        item_disc: String,
        item_lead_time: String,
        item_net_rate: String,
        item_eff_rate: String,
        item_eff_value: String,
        item_tax_code: String,
        item_tax_rate: String,
        item_taxable: String,
        item_cess_calc: String,
        item_posting_gl: String,
        item_tax_amt: String,
        item_install_req: String,
        item_make: String,
        item_sales_rate: String,
        item_markup: String,
        item_markup_per: String,
        item_igst: String,
        item_sgst: String,
        item_cgst : String,
        item_war_months: String,
        item_disc_value: String,
    }],
    // item_model_no: {
    //     type: String
    // },
    // item_name: {
    //     type: String
    // },
    // item_desc: {
    //     type: String
    // },
    // item_balance: {
    //     type: String
    // },
    // item_seq: {
    //     type: String
    // },
    // item_code: {
    //     type: String
    // },
    // item_hsn_code: {
    //     type: String
    // },
    // item_unit: {
    //     type: String
    // },
    // item_qty: {
    //     type: String
    // },
    // item_rate: {
    //     type: String
    // },
    // item_mrp: {
    //     type: String
    // },
    // item_amount: {
    //     type: String
    // },
    // item_disc: {
    //     type: String
    // },
    // item_lead_time: {
    //     type: String
    // },
    // item_net_rate: {
    //     type: String
    // },
    // item_eff_rate: {
    //     type: String
    // },
    // item_eff_value: {
    //     type: String
    // },
    // item_tax_code: {
    //     type: String
    // },
    // item_tax_rate: {
    //     type: String
    // },
    // item_taxable: {
    //     type: String
    // },
    // item_cess_calc: {
    //     type: String
    // },
    // item_posting_gl: {
    //     type: String
    // },
    // item_tax_amt: {
    //     type: String
    // },
    // item_install_req: {
    //     type: String
    // },
    // item_make: {
    //     type:String
    // },
    // item_sales_rate: {
    //     type:String
    // },
    // item_markup: {
    //     type: String
    // },
    // item_markup_per: {
    //     type: String
    // },
    // item_igst: {
    //     type: String
    // },
    // item_cgst: {
    //     type: String
    // },
    // item_sgst: {
    //     type: String
    // },
    // item_war_months: {
    //     type:String
    // },
    // item_disc_value:{
    //     type: String
    // },
    // item_cat: {
    //     type: String
    // },
    // item_type: {
    //     type: String
    // },

    // sl_no: {
    //     type: String

    // },
    // person_name: {
    //     type: String
    // },
    // date:{
    //     type: String
    // },
    // remarks: {
    //     type: String
    // },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'enquiry'
}
);
module.exports = mongoose.model('EnquirySchema', enquirySchema)