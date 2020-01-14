const mongoose = require('mongoose');

const Introduction = new mongoose.Schema({
    content:{
        type:String
    },
    

})
const intro = mongoose.model('introduction', Introduction)

module.exports = intro;