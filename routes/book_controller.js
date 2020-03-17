const express = require('express');
const router = express.Router();
const CalendarMenber = new require('../model/calendarMenber');
const withAuth = require('../middleware');

router.post('/postBook', function (req, res, next) {

    const { address, province, district, name, datetime, phone, id_store } = req.body
    const saveCalendarMenber = new CalendarMenber({
        address: address,
        name_menber_cut: name,
        date_menber_cut: datetime,
        province: province,
        district: district,
        phone_menber_cut: phone,
        id_store: id_store
    });
    
    saveCalendarMenber.save();
    res.send(saveCalendarMenber);
});

router.get('/getmanagercalendarcrate', function (req, res) {
    const { id_store } = req.query
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let today = `${year}-${month + 1}-${(day)}`
    let todaylast = `${year}-${month + 1}-${(day + 1)}`

    CalendarMenber.find({ id_store: id_store, date_menber_cut: { $gte: today, $lte: todaylast } }).then((docs) => {
        res.send(docs);
    })
})

router.get('/getCalendarMenber', function (req, res) {
    CalendarMenber.find({}).then((docs) => {
        res.send(docs)
    });
});

module.exports = router;
