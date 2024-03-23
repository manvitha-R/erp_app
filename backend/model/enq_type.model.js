const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let enquirytypeSchema = new Schema({
    enq_type_name: {
        type: String
    },
    enq_type_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'enquiry_type'
}
);
module.exports = mongoose.model('EnquirytypeSchema', enquirytypeSchema)