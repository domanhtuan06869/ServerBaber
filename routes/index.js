const express = require('express');
const router = express.Router();
const withAuth = require('../middleware');
const init = require('../model/init');
const uploadAWS = init.uploadAWS;
router.post('/Uploadfile', uploadAWS.any(),withAuth, function (req, res) {
    let responseData = [];
    req.files.forEach((data) => {
      responseData.push(data.location);
    });
    res.send(responseData)
  })



module.exports = router;