const express = require('express');
const router = express.Router();
const Menber = new require('../model/menber_cut');
const withAuth = require('../middleware');

router.get('/getMenber', function (req, res) {
    Menber.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postMenber', function (req, res, next) {
    const {nameStylist,ratingStylist } = req.body

    const menber = new Menber({ratingStylist:ratingStylist,nameStylist:nameStylist});
    menber.save();
    res.send(menber);
});

router.delete('/deleteMenber', function (req, res, next) {
    const { id } = req.body
    const menber=new Menber({_id:id});
     menber.remove();
     res.send(menber)
});



module.exports = router