const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let designationSchema = new Schema({
    designation_name: {
        type: String
    },
    designation_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'designations'
}
);
module.exports = mongoose.model('DesignationSchema', designationSchema)