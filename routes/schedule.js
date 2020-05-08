const express = require('express');
const router = express.Router();
const Schedules = new require('../model/schedule');
const withAuth = require('../middleware');

router.get('/getSchedules', withAuth, function (req, res) {
    const { dateBook, address } = req.query

    Schedules.find({ locationSchedule: address }).then((docs) => {
        let listBook = docs.filter((item) => item.dateSchedule == dateBook)
        res.send(listBook)
    })
});

router.post('/updateSchedule', withAuth, function (req, res, next) {
    const { id } = req.body
    Schedules.findOneAndUpdate({ _id: id }, {
        statusSchedule: true
    }, {
        new: true,
        runValidators: true
    }).then(doc => {
        res.send(doc)
    })
});

router.delete('/deleteGuestBooked', withAuth, function (req, res, next) {
    const { id } = req.body

    const schedule = new Schedules({ _id: id });
    schedule.remove();
    res.send(schedule)
});

module.exports = router