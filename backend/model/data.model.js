const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dataSchema = new Schema({
    item_name: {
        type: String
    },
    item_cat: {
        type: String
    },
    item_type: {
        type: String
    },
    item_code: {
        type: String
    },
   
    item_hsn_code: {
        type: String
    },
    item_model_no: {
        type: String
    },
    checked: Boolean,
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'data'
}
);
module.exports = mongoose.model('DataSchema', dataSchema)