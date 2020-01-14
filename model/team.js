const mongoose = require('mongoose');

const Team = new mongoose.Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    description:{
        type:String
    },
    avatar:{
        type:String
    }

})
const team = mongoose.model('team', Team)

module.exports = team;