const mongoose = require('mongoose');
const StoreSchema = new mongoose.Schema({
    address: {
        type: String,
        trim:true,
    },
},{ versionKey: false });
module.exports = mongoose.model('store', StoreSchema);