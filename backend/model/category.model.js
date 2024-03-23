const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
    category_name: {
        type: String
    },
    category_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'categorys'
}
);
module.exports = mongoose.model('CategorySchema', categorySchema)