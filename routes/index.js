const express = require('express');
const router = express.Router();
const withAuth = require('../middleware');
const init = require('../model/init');
const uploadAWS = init.uploadAWS;
router.post('/Uploadfile', uploadAWS.any(), function (req, res) {
    let responseData = [];
    req.files.forEach((data) => {
      responseData.push(data.location);
    });
    res.send(responseData)
  })

  router.post('/Upload', uploadAWS.any(), function (req, res) {
    let responseData = [];
    req.files.forEach((data) => {
      responseData.push(data.location);
    });
    res.send({image:responseData[0]})
  })

module.exports = router;