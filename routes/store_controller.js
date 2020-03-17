
var express = require('express');
var router = express.Router();
var Store = new require('../model/address_store');

router.get('/getStore', function (req, res) {
    Store.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postStore', function (req, res, next) {
    const { address ,province,district} = req.body
    const store = new Store({ address:address,province:province,district:district});
    store.save();
    res.send(store);
});
router.delete('/deleteStore', function (req, res, next) {
    const { id } = req.body
    console.log(id)
    const store=new Store({_id:id});
     store.remove();
     res.send(store)
});

router.get('/aaaa',function(req,res){
    for(let i=0;i<10000;i++){
        const saveImage = new Store({ address:'ahahahahaha'});
        saveImage.save();
    }

    res.send('ok')
})
module.exports=router;