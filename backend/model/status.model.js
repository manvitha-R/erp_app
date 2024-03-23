const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let statusSchema = new Schema({
    status_name: {
        type: String
    },
    status_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'status'
}
);
module.exports = mongoose.model('StatusSchema', statusSchema)