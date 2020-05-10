const express = require('express');
const router = express.Router();
const Product = new require('../model/product');
const Oders = new require('../model/oders');
const withAuth = require('../middleware');

router.get('/getProducts',withAuth, function (req, res) {
    const { type } = req.query
    let obj;
    if (type === undefined) {
        obj = {};
    } else {
        obj = { typeProduct: type }
    }
    Product.find(obj).then((docs) => res.send(docs));
})

router.post('/postProduct',withAuth, function (req, res, next) {
    const { imageProduct, nameProduct, priceProduct, typeProduct, descriptionProduct, ratingProduct } = req.body

    const saveProducct = new Product({
        imageProduct: imageProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        typeProduct: typeProduct,
        descriptionProduct: descriptionProduct,
        ratingProduct: ratingProduct
    });

    saveProducct.save();
    res.send(saveProducct);
});

router.post('/updateProduct',withAuth, function (req, res) {
    const { id, imageProduct, nameProduct, priceProduct, typeProduct, descriptionProduct, ratingProduct } = req.body
    Product.findOneAndUpdate({ _id: id }, {
        imageProduct: imageProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        typeProduct: typeProduct,
        descriptionProduct: descriptionProduct,
        ratingProduct: ratingProduct
    }, {
        new: true,
        runValidators: true
    }).then(doc => {
        res.send(doc)
    })
});

router.delete('/deleteProduct',withAuth, function (req, res, next) {
    const { id } = req.body

    const deleteProduct = new Product({ _id: id });
    deleteProduct.remove();
    res.send(deleteProduct)
});

router.get('/getOders',withAuth, function (req, res) {
    let v = req.query.status
    Oders.find({ __v: v }).then((docs) => res.send(docs));
})

router.post('/updateOder',withAuth, function (req, res) {
    const { v, id } = req.body
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

router.delete('/deleteOder',withAuth, function (req, res, next) {
    const { id } = req.body

    const deleteOder = new Oders({ _id: id });
    deleteOder.remove();
    res.send(deleteOder)
});

router.get("/searchProduct", (req, res) => {
    var name = req.query.name;
    if (!name) {
        res.send("VUi long khong de trong tên sản phẩm");
        //nếu có lỗi thì dừng luôn
        return;
    }
    Product.find({ nameProduct: name }).exec((err, docs) => {
        res.send(docs)
    })
})

//Sắp xếp sản phẩm tăng dần
router.get("/result/asc", (req, res) => {
    var id = req.query.id;
    Product.find({ typeProduct: id }).sort({ priceProduct: 1 }).exec((err, docs) => {
        res.send(docs)
    })
})

//Sắp xếp sản phẩm giảm dần
router.get("/result/dsc", (req, res) => {
    var id = req.query.id;
    Product.find({ typeProduct: id }).sort({ priceProduct: -1 }).exec((err, docs) => {
        res.send(docs)
    })
})

router.get("/result", (req, res) => {
    var id = req.query.id;
    if (!id) {
        res.send("VUi long khong de trong id");
        //nếu có lỗi thì dừng luôn
        return;
    }
    Product.find({ typeProduct: id }).exec((err, docs) => {
        res.send(docs)
    })
})

module.exports = router;
