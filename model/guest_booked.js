const mongoose = require('mongoose');

const GuestBooked = new mongoose.Schema({
    numberPhone: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    bookingTime: {
        type: String,
        trim: true,
    },
    menberCut: {
        type: String,
        trim: true,
    },
    addressStore: {
        type: String,
        trim: true,
    },
    idStore: {
        type: String,
        trim: true,
    },
}, { versionKey: false });

module.exports = mongoose.model('guestbooked', GuestBooked);