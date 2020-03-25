const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    province: {
        type: String,
        trim: true
    },
    district: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true,
    },
}, { versionKey: false });

module.exports = mongoose.model('store', StoreSchema);