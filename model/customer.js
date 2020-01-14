const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    imagecustomer:{
        type:String
    },
    

})
const customer = mongoose.model('customer', Customer)

module.exports = customer;