const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let businessSchema = new Schema({
    business_name: {
        type: String
    },
    business_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'business'
}
);
module.exports = mongoose.model('BusinessSchema', businessSchema)