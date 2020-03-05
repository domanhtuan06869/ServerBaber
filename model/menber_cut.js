const mongoose = require('mongoose');
const MenberSchema = new mongoose.Schema({
    name_menber_cut: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    age: {
        type: String,
        trim: true,

    },
    phone: {
        type: String,
        trim: true,

    },
    number_cmt: {
        type: String,
        trim: true,

    }

},{ versionKey: false });
module.exports = mongoose.model('menber', MenberSchema);