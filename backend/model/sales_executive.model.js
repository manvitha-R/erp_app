const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salesexecutiveSchema = new Schema({
    exec_code: {
        type: String
    },
    exec_name: {
        type: String
    },
    exec_commission: {
        type: String
    },
    exec_rateon: {
        type: String
    },
    exec_amount: {
        type: String
    },
    exec_email: {
        type: String
    },
    exec_phone: {
        type: String
    },
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'sales_executives'
}
);
module.exports = mongoose.model('SalesExecutiveSchema', salesexecutiveSchema)