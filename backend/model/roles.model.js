const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rolesSchema = new Schema({
    role_name: {
        type: String
    },
    role_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'roles'
}
);
module.exports = mongoose.model('RolesSchema', rolesSchema)