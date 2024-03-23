const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    user_name: {
        type: String
    },
    user_role: {
        type: String
    },
    user_desc: {
        type: String
    },
    user_password: {
        type: String
    },
    
    
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'user'
}
);
module.exports = mongoose.model('UserSchema', userSchema)