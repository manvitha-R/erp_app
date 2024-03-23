const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let purchase_requisitionSchema = new Schema({
    pur_req_requester: {
        type: String
    },
    pur_req_date: {
        type: String
    },
    pur_req_voucher_no: {
          type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'purchase_requisition'
}
);
module.exports = mongoose.model('Purchase_requisitionSchema', purchase_requisitionSchema)