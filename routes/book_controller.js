const express = require('express');
const router = express.Router();
const CalendarMenber = new require('../model/calendarMenber');
const withAuth = require('../middleware');

router.post('/postBook', function (req, res) {

    const { address, province, district, name, datetime, phone, id_store } = req.body
    const saveCalendarMenber = new CalendarMenber({
        address: address,
        name_menber: name,
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
    let today = `${year}/${month + 1}/${(day)}`
    let todaylast = `${year}/${month + 1}/${(day + 1)}`

    CalendarMenber.find({ id_store: id_store, date_menber_cut: { $gte: today, $lte: todaylast } }).then((docs) => {
        res.send(docs);
    })
})

router.get('/getCalendarMenber', function (req, res) {
    CalendarMenber.find({}).then((docs) => {
        res.send(docs)
    });
});

router.post('/updateCalendarMenber', function (req, res) {
    const { id, isReady, index } = req.body
 console.log(  objShift(isReady, index))
    CalendarMenber.findOneAndUpdate({ _id: id }, objShift(isReady, index), {
        new: true,
        runValidators: true
    }).then(doc => {
        res.send(doc)
    })

});

module.exports = router;

const objShift = (isReady, indexReady) => {
    const arrShift = [
        {
            shift_1: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_2: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_3: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_4: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_5: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_6: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_7: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_8: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_9: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_10: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_11: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_12: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_13: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_14: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_15: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_16: {
                isReady: isReady ? false : true
            }
        },
        {
            shift_17: {
                isReady: isReady ? false : true
            }
        },    {
            shift_18: {
                isReady: isReady ? false : true
            }
        },
        
    ];
    return arrShift[indexReady];
};