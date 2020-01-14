const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:String
    },

})
const contact = mongoose.model('contact', Contact)

module.exports = contact;