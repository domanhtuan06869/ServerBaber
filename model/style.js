const mongoose = require('mongoose');
const StyleSchema = new mongoose.Schema({
    imgStyle: {
        type: Array,
    },
   

});
module.exports = mongoose.model('style', StyleSchema);