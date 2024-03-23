const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let followupSchema = new Schema({
    // enq_on: {
    //     type: String
    // },
    // enq_by: {
    //     type: String
    // },
    // enq_date: {
    //     type: String,
      
    // },
    // enq_reference: {
    //     type: String
    // },
    // enq_sales_co_ord: {
    //     type: String
    // },
    // status: {
    //     type: String

    // },
    sl_no: {
        type: String

    },
    person_name: {
        type: String
    },
    date:{
        type: String
    },
    remarks: {
        type: String
    },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'followup'
}
);
module.exports = mongoose.model('FollowupSchema', followupSchema)