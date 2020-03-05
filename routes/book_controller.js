const express = require('express');
const router = express.Router();
const Book=new require('../model/book');
const withAuth = require('../middleware');

router.post('/postBook',  function (req, res, next) {
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    let today=`${year}-${month}-${day+1}`
    
    const {address,name } = req.body
    const saveBook = new Book({ address:address,name:name,datebook:new Date(today)});
    saveBook.save();
    res.send(saveBook);
});

router.get('/getbook',function(req,res){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    let today=`${year}-${month+1}-${(day+5)}`
    console.log(today)

    Book.find({datebook:{  $gte: today }}).then((docs)=>{
        res.send(docs)
    })
})

router.post('/createMenberCut',function(req,res){

});


module.exports = router;
