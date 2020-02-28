const mongoose=require('mongoose')
const StyleSchema = new mongoose.Schema({
    namestyle: {
        type: String,
        trim: true
    },
    imgStyle: {
        type: Array,
    },
   

});
module.exports = mongoose.model('style', StyleSchema);