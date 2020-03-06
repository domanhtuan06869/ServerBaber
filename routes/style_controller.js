var express = require('express');
var router = express.Router();
var Style = new require('../model/style');
const withAuth = require('../middleware');

router.get('/getStyle', function (req, res) {
    Style.find({},{img_style:{$slice: 4}}).then((docs) => {
        res.send(docs.reverse())
    })
});

router.post('/postStyle', function (req, res, next) {
    const { arrayStyle } = req.body

    const saveImage = new Style({ img_style:arrayStyle});
    saveImage.save();
    res.send(saveImage);
});

router.delete('/deleteStyle', function (req, res, next) {
    const { id } = req.body
    const style=new Style({_id:id});
     style.remove();
     res.send(style)
});



module.exports = router