var express = require('express');
var router = express.Router();
var Style =new require('../model/style');
router.get('/getStyle',function(req,res){

    Style.find({}).then((docs)=>{
        res.send(docs)
    })

})

module.exports=router