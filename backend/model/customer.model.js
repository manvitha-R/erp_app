const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customermasterSchema = new Schema({
    cust_name: {
        type: String
    },
    cust_phn: {
        type: String
    },
    cust_email: {
        type: String
    },
    cust_gst_number: {
        type: String
    },
    cust_cin_number: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: String
    },
    tempAddress: {
        type: String
    },
    tempCity: {
        type: String
    },
    tempState: {
        type: String
    },
    tempCountry: {
        type: String
    },
    tempPincode: {
        type: String
    },

    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'customer_master'
}
);
module.exports = mongoose.model('CustomerMasterSchema', customermasterSchema)