const express = require('express');
const router = express.Router();
const Product = new require('../model/product');
const Oders = new require('../model/oders');


router.get('/getProducts', function (req, res) {
    Product.find({}).then((docs) => res.send(docs));
})

router.post('/postProduct', function (req, res, next) {
    const { imageProduct, nameProduct, priceProduct, typeProduct, descriptionProduct } = req.body

    const saveProducct = new Product({
        imageProduct: imageProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        typeProduct: typeProduct,
        descriptionProduct: descriptionProduct,
    });

    saveProducct.save();
    res.send(saveProducct);
});

router.post('/updateProduct', function (req, res) {
    const { id, imageProduct, nameProduct, priceProduct, typeProduct, descriptionProduct } = req.body
    Product.findOneAndUpdate({ _id: id }, {
        imageProduct: imageProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        typeProduct: typeProduct,
        descriptionProduct: descriptionProduct,
    }, {
        new: true,
        runValidators: true
    }).then(doc => {
        res.send(doc)
    })

});

router.delete('/deleteProduct', function (req, res, next) {
    const { id } = req.body

    const deleteProduct = new Product({ _id: id });
    deleteProduct.remove();
    res.send(deleteProduct)
});

router.get('/getOders', function (req, res) {
    let v=req.query.status
    Oders.find({__v:v}).then((docs) => res.send(docs));
})

router.post('/updateOder', function (req, res) {
    const {v,id} = req.body
    console.log(req.body)
    Oders.findOneAndUpdate({ _id: id }, {
        __v: v
    }, {
        new: true,
        runValidators: true
    }).then(doc => {
        res.send(doc)
    })

});


router.delete('/deleteOder', function (req, res, next) {
    const { id } = req.body

    const deleteOder = new Oders({ _id: id });
    deleteOder.remove();
    res.send(deleteOder)
});

module.exports = router;
