const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dispatchSchema = new Schema({

    disp_gst_type: {
        type: String
    },
    disp_date: {
        type: Date
    },
    disp_warehouse: {
        type: String
    },
    disp_number: {
        type: String
    },
    disp_cust: {
        type: String
    },
    disp_ref: {
        type: String
    },
    disp_cust_email: {
        type: String
    },
    disp_ref_date: {
        type: Date
    },
    disp_salesmen: {
        type: String
    },
    disp_tax: {
        type: String
    },

    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'dispatch'
}
);
module.exports = mongoose.model('DispatchSchema', dispatchSchema)