var express = require('express');
var router = express.Router();
const withAuth = require('../middleware');


var init = require('../model/init');


var uploadAWS = init.uploadAWS;
router.post('/Uploadfile', uploadAWS.any(), function (req, res) {
    let responseData = [];
    req.files.forEach((data) => {
      responseData.push(data.location);
    });
    res.send(responseData)
  })


/* GET home page. */
/*router.post('/postSlide', withAuth,function(req, res, next) {
    const {stt,title,content,urlimage}=req.body

    const savesl=new Slide({Stt:stt,Title:title,Content:content,UrlImage:urlimage})
    savesl.save()
 res.send(savesl)
});

router.get('/getSlides',function(req,res){
    Slide.find({}).then((docs)=>{
        res.send(docs)
    })
})
router.get('/getIntroduction',function(req,res){
    Intro.findOne({_id:'5ddcf1461c9d440000080318'}).then((docs)=>{
        res.send(docs)
    })
})
router.get('/getIntroductions',function(req,res){
    Intro.find({_id:'5ddcf1461c9d440000080318'}).then((docs)=>{
        res.send(docs)
    })
})
router.put('/updateintro',withAuth,function(req,res){
   
    Intro.findOneAndUpdate({_id:'5ddcf1461c9d440000080318'},{content:req.body.content},{
        new: true,                    
        runValidators: true             
      })
      .then(doc => {
  res.send(doc)
   
})
})

/// customer
router.get('/getCustomer',function(req,res){
    Customer.find({}).then((docs)=>{
        res.send(docs)
    })
})

router.post('/postCustomer',withAuth,function(req,res){
    const saveCustomer=new Customer({imagecustomer:req.body.imagecustomer})
    saveCustomer.save()
    res.send(saveCustomer)
})

router.post('/postContact',function(req,res){
    const {name,email,number}=req.body
 

    let testRegex = /^\d{10}$/gi;
    var phone = testRegex.test(number)
    if(phone==false){
     res.send({status:400})
    }else{ 
        const saveContact=new Contact({number:number,email:email,name:name})
        saveContact.save()
       
        res.send(saveContact)
    }       
})


router.get('/getNews',function(req,res){
    News.find({}).then((docs)=>{
        res.send(docs)
    })
})
router.get('/getOneNews',function(req,res){
    News.findOne({_id:req.query.id}).then((docs)=>{
        res.send(docs)
    })
})



router.get('/getTeam',function(req,res){
    Team.find({}).limit(3).then((docs)=>{
        res.send(docs)
    })
})

router.post('/postTeam',withAuth,function(req,res){
 const {name,position,description,avatar}=req.body
      const saveTeam=new Team({name:name,position:position,description:description,avatar:avatar})
      saveTeam.save()
      res.send(saveTeam)
})


router.post('/postNews',withAuth, function(req, res) {
    const {title,content,image,description,email}=req.body
    const savesl=new News({content:content,title:title,image:image,description:description,email:email})
    savesl.save()
 res.send(savesl)
});
router.put('/updateSlider',withAuth,function(req,res){
    const{id,stt,title,content,urlimage}=req.body
   Slide.findOneAndUpdate({_id:id},{Stt:stt,Title:title,Content:content,UrlImage:urlimage},{
        new: true,                    
        runValidators: true             
      })
      .then(doc => {
  res.send(doc)
   
})

})
router.delete('/deleteSlider',withAuth,function(req,res){
   
    const slider=new Slide({_id:req.body.id});
     slider.remove();

     res.send(slider)
})
router.put('/updateTeam',withAuth,function(req,res){
    const{id,position,description,name,avatar}=req.body
   Team.findOneAndUpdate({_id:id},{name:name,position:position,description:description,avatar:avatar},{
        new: true,                    
        runValidators: true             
      })
      .then(doc => {
  res.send(doc)  
})
})
router.delete('/deleteCustomer',withAuth,function(req,res){
   
    const customer=new Customer({_id:req.body.id});
     customer.remove();
     res.send(customer)
})
router.get('/getContact',function(req,res){
 Contact.find({}).then((doc)=>{
     res.send(doc)
 })   
})
router.delete('/deleteContact',withAuth,function(req,res){
     
    const contact=new Contact({_id:req.body.id});
     contact.remove();
     res.send(contact) 
})
router.put('/updateNews',withAuth,function(req,res){
    const {id,title,content,image,description,email}=req.body
   News.findOneAndUpdate({_id:id},{title:title,content:content,description:description,image:image,email:email},{
        new: true,                    
        runValidators: true             
      })
      .then(doc => {
  res.send(doc)  
})
})

router.delete('/deleteNews',withAuth,function(req,res){
     
    const news=new News({_id:req.body.id});
    news.remove();
     res.send(news) 
})

router.put('/updateCustomer',withAuth,function(req,res){
    const{id,imagecustomer}=req.body
    Customer.findOneAndUpdate({_id:id},{imagecustomer:imagecustomer},{
        new: true,                    
        runValidators: true             
      })
      .then(doc => {
  res.send(doc)  
})
})*/
module.exports = router;