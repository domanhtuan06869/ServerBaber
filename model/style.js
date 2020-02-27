const StyleSchema = new Schema({
    namestyle: {
        type: String,
        trim: true
    },
    imgStyle: {
        type: Array,
    },
   

});
module.exports = mongoose.model('style', StyleSchema);