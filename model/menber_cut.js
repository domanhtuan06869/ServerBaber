const mongoose = require('mongoose');

const MenberSchema = new mongoose.Schema({
    nameStylist: {
        type: String,
        trim: true,
    },
    ratingStylist: {
        type: String,
        trim: true,
    },
    locationStylist: {
        type: String,
        trim: true,
    },
    image1Stylist: {
        type: String,
        trim: true,
    },
    image2Stylist: {
        type: String,
        trim: true,
    },
    image3Stylist: {
        type: String,
        trim: true,
    }
}, { versionKey: false });
module.exports = mongoose.model('stylist', MenberSchema);