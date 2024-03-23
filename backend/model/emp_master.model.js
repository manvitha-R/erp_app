const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeemasterSchema = new Schema({
    employee_name: {
        type: String
    },
    phone_number: {
        type: String
    },
    email: {
        type: String
    },
    aadhar_number: {
        type: String
    },
    pan_number: {
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
    collection: 'employee_master'
}
);
module.exports = mongoose.model('EmployeeMasterSchema', employeemasterSchema)