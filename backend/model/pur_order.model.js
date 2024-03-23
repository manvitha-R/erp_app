const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let purchase_orderSchema = new Schema({
    pur_ord_gst_type: {
        type: String
    },
    pur_ord_date: {
        type: String
    },
    pur_ord_vendor: {
          type: String
    },
    pur_ord_order_no: {
        type: String
    },
      pur_ord_email: {
      type: String
    },
    pur_ord_refference: {
        type: String
    },
    pur_ord_del_date: {
        type: String
     },
     pur_ord_ref_date: {
        type: String
     },
     pur_ord_agent: {
        type: String
     },
     pur_ord_tax: {
        type: String
     },
     pur_ord_item_val: {
        type: String
     },
     pur_ord_discount: {
        type: String
     },
     pur_ord_cutting_chrgs: {
        type: String
     },
     pur_ord_taxable: {
        type: String
     },
     pur_ord_tax_amnt: {
        type: String
     },
     pur_ord_cess_amnt: {
        type: String
     },
     pur_ord_add_discount: {
        type: String
     },
     pur_ord_tcs: {
        type: String
     },
     pur_ord_round_off: {
        type: String
     },
     pur_ord_doc_amnt: {
        type: String
     },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'purchase_order'
}
);
module.exports = mongoose.model('Purchase_OrderSchema', purchase_orderSchema)