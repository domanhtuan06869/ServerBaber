const mongoose = require('mongoose');

const News = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    datecreate:{
        type: Date,
        default: Date.now
    },
    email:{
        type:String
    }
    

})
const news = mongoose.model('news',News)

module.exports = news;