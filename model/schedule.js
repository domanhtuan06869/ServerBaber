const mongoose = require('mongoose');

const schedule = new mongoose.Schema({
    fullName:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    time:{
        type:String
    },
    place:{
        type:String
    }
}, { versionKey: false });

module.exports = mongoose.model('schedule', schedule);