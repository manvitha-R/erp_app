const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let purchase_grnSchema = new Schema({
    pur_grn_gst_type: {
        type: String
    },
    pur_grn_vendor: {
        type: String
    },
    pur_grn_email: {
          type: String
    },
    pur_grn_date: {
        type: String
    },
      pur_grn_number: {
      type: String
    },
    pur_grn_ref_date: {
        type: String
    },
    pur_grn_ref_number: {
        type: String
     },
     pur_grn_tax: {
        type: String
     },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'purchase_grn'
}
);
module.exports = mongoose.model('Purchase_grnSchema', purchase_grnSchema)