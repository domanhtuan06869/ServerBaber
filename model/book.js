const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    address: {
        type: String,
        trim:true,
    },
    datebook:{
         type:Date,
      
    },
    name:{
        type:String,
        trim:true
    },
    ca1:{
        type:Boolean,
        default:false
    },
    ca2:{
        type:Boolean,
        default:false

    },
    ca4:{
        type:Boolean,
        default:false

    },
    ca5:{
        type:Boolean,
        default:false

    }
},{ versionKey: false });
module.exports = mongoose.model('book', BookSchema);