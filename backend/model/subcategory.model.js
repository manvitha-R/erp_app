const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subcategorySchema = new Schema({
    subcategory_name: {
        type: String
    },
    subcategory_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'subcategorys'
}
);
module.exports = mongoose.model('SubcategorySchema', subcategorySchema)