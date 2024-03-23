const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let suppliermasterSchema = new Schema({
    supplier_name: {
        type: String
    },
    supplier_phn: {
        type: String
    },
    supplier_email: {
        type: String
    },
    supplier_gst_number: {
        type: String
    },
    supplier_cin_number: {
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
    collection: 'supplier_master'
}
);
module.exports = mongoose.model('SupplierMasterSchema', suppliermasterSchema)