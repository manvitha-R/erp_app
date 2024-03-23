
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historySchema = new Schema({
    sl_no: {
         type: String
        },
        
    person_name: {
        type: String
         },
    
     date:{
         type: String
       },

     remarks: {
       type: String
     },
     
    isdeleted: {
        type: Boolean,
        default: false
    },
},
{
    collection: 'history'
}
);
module.exports = mongoose.model('HistorySchema', historySchema)