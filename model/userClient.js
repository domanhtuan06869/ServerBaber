const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    nameUser: {
        type: String
    },
    phoneUser: {
        type: String
    }
})

const User = mongoose.model('User', userModel);
  
module.exports =  User;