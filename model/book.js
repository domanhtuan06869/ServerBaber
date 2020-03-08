const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    province: {
        type: String,
        trim: true,
    },
    district: {
        type: String
    },
    address: {
        type: String
    },
    date_menber_cut: {
        type: Date,

    },
    name_menber: {
        type: String,
        trim: true
    },
    phone_menber_cut: {
        type: String
    },
    id_store: {
        type: String
    },
    ca1: {
        type: Boolean,
        default: false
    },
    ca2: {
        type: Boolean,
        default: false

    },
    ca3: {
        type: Boolean,
        default: false

    },
    ca4: {
        type: Boolean,
        default: false

    },
    ca5: {
        type: Boolean,
        default: false

    },
    ca7: {
        type: String,
        default: false
    },
    ca8: {
        type: String,
        default: false
    }
}, { versionKey: false });
module.exports = mongoose.model('book', BookSchema);