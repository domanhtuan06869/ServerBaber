const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '4588f5e0',
  apiSecret: 'xhzmIbv1QBZZYysS',
});


router.post('/sendOTP', function (req, res) {
  const { phone } = req.body
  console.log(phone)
  nexmo.verify.request({
    number: '84' + phone,
    brand: 'Barber',
    code_length: '6'
  }, (err, result) => {
    console.log(err ? err : result)
    res.send(result)
  });
})

router.post('/checkOTP', function (req, res) {
  nexmo.verify.check({
    request_id: req.body.id,
    code: req.body.code
  }, (err, result) => {
    console.log(err ? err : result)
    res.send(result)
  });
})

router.post('/confirmOTP', async function (req, res) {
  console.log(req.body.id)
  await nexmo.verify.control({
    request_id: req.body.id,
    cmd: 'cancel'
  }, (err, result) => {
    console.log(err ? err : result)
    if (result.status === '0') {
      nexmo.verify.request({
        number: '84' + req.body.phone,
        brand: 'Barber',
        code_length: '6'
      }, (err, result) => {
        console.log(err ? err : result)
        res.send(result)
      });
    } else {
      res.send(result)
    }
  });
})

router.get('/getuser', function (req, res) {
  const { phone } = req.query

})
module.exports = router;
