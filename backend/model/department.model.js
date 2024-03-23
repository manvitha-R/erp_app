const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departmentSchema = new Schema({
    department_name: {
        type: String
    },
    department_desc: {
        type: String
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'department'
}
);
module.exports = mongoose.model('DepartmentSchema', departmentSchema)