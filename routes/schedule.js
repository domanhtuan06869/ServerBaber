const express = require('express');
const router = express.Router();
const Schedules = new require('../model/schedule');
const withAuth = require('../middleware');

router.get('/getSchedule', withAuth, function (req, res) {
    Schedules.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postGuestBooked', function (req, res, next) {
    const { fullName, phoneNumber, time, place } = req.body

    const schedule = new Schedules({
        "fullName": fullName,
        "phoneNumber": phoneNumber,
        "time": time,
        "place": place
    });

    schedule.save();
    res.send(schedule);
});

router.delete('/deleteGuestBooked', function (req, res, next) {
    const { id } = req.body

    const schedule = new Schedules({ _id: id });
    schedule.remove();
    res.send(schedule)
});

module.exports = router