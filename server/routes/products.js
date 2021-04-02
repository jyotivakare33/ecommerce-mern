const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//Get a product
router.get('/:productId',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    const id = req.params.productId;
    Product.findOne({ product_id: id }).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'Product Not Found'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;