const mongoose = require('mongoose');
const MenberSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,

    },

}, { versionKey: false });
module.exports = mongoose.model('menber', MenberSchema);