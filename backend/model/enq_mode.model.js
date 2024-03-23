const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let enquirymodeSchema = new Schema({
    enq_mode_name: {
        type: String
    },
    enq_mode_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'enquiry_mode'
}
);
module.exports = mongoose.model('EnquirymodeSchema', enquirymodeSchema)