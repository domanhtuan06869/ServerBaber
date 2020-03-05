const express = require('express');
const router = express.Router();
const Book=new require('../model/book');
const withAuth = require('../middleware');

router.post('/postBook',  function (req, res, next) {
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    let today=`${year}-${month+1}-${day+1}`
    console.log(today)
    
    const {address,name } = req.body
    const saveBook = new Book({ address:address,name:name,datebook:today});
    saveBook.save();
    res.send(saveBook);
});

router.get('/getbook',function(req,res){
    const{name,address}=req.query
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    let today=`${year}-${month+1}-${(day)}`
    let todaylast=`${year}-${month+1}-${(day+1)}`
    console.log('todey',today)
    console.log('todey',todaylast)

    Book.find({name:name,address:address,datebook:{ $gte:today, $lte:todaylast }}).then((docs)=>{
        res.send(docs)
    })
})

router.get('/getbooka',function(req,res){

    Book.find({}).then((docs)=>{
        res.send(docs)
    })
})


module.exports = router;
