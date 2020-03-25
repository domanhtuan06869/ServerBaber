const express = require('express');
const router = express.Router();
const GuestBooked = new require('../model/guest_booked');
const withAuth = require('../middleware');

router.get('/getBooked', function (req, res) {
    GuestBooked.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postGuestBooked', function (req, res, next) {
    const { numberPhone, name, bookingTime, menberCut, addressStore, idStore } = req.body

    const guestBooked = new GuestBooked({
        numberPhone: numberPhone,
        name: name,
        bookingTime: bookingTime,
        menberCut: menberCut,
        addressStrore: addressStore,
        idStrore: idStore
    });

    guestBooked.save();
    res.send(guestBooked);
});

router.delete('/deleteGuestBooked', function (req, res, next) {
    const { id } = req.body

    const guestBooked = new GuestBooked({ _id: id });
    guestBooked.remove();
    res.send(guestBooked)
});

module.exports = router