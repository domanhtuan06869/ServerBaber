
var express = require('express');
var router = express.Router();
var Store = new require('../model/address_store');

router.get('/getStore', function (req, res) {
    Store.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postStore', function (req, res, next) {
    const { addressLocation, cityLocation, districtLocation,districtDetailLocation } = req.body
    const store = new Store({
        addressLocation: addressLocation,
        cityLocation: cityLocation,
        districtLocation: districtLocation,
        districtDetailLocation:districtDetailLocation
    });
    store.save();
    res.send(store);
});
router.delete('/deleteStore', function (req, res, next) {
    const { id } = req.body
    console.log(id)
    const store = new Store({ _id: id });
    store.remove();
    res.send(store)
});

module.exports = router;