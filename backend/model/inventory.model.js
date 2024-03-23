const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let inventorySchema = new Schema({
    item_model_no: {
        type: String
    },
    item_name: {
        type: String
    },
    item_desc: {
        type: String
    },
    item_balance: {
        type: String
    },
    item_seq: {
        type: String
    },
    item_code: {
        type: String
    },
    item_hsn_code: {
        type: String
    },
    item_unit: {
        type: String
    },
    item_qty: {
        type: String
    },
    item_rate: {
        type: String
    },
    item_mrp: {
        type: String
    },
    item_amount: {
        type: String
    },
    item_disc: {
        type: String
    },
    item_lead_time: {
        type: String
    },
    item_net_rate: {
        type: String
    },
    item_eff_rate: {
        type: String
    },
    item_eff_value: {
        type: String
    },
    item_tax_code: {
        type: String
    },
    item_tax_rate: {
        type: String
    },
    item_taxable: {
        type: String
    },
    item_cess_calc: {
        type: String
    },
    item_posting_gl: {
        type: String
    },
    item_tax_amt: {
        type: String
    },
    item_install_req: {
        type: String
    },
    item_make: {
        type:String
    },
    item_sales_rate: {
        type:String
    },
    item_markup: {
        type: String
    },
    item_markup_per: {
        type: String
    },
    item_igst: {
        type: String
    },
    item_cgst: {
        type: String
    },
    item_sgst: {
        type: String
    },
    item_war_months: {
        type:String
    },
    item_disc_value:{
        type: String
    },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'inventory'
}
);
module.exports = mongoose.model('InventorySchema', inventorySchema)