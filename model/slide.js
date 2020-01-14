const mongoose = require('mongoose');

const Silde = new mongoose.Schema({
    Stt:{
        type:String
    },
    Title:{
        type:String
    },
    Content:{
        type:String
    },
    UrlImage:{
        type:String
    }

})
const slide = mongoose.model('Slide', Silde)

module.exports = slide;