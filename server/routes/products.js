const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//List all products
router.get('/',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Product.find({}).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'No Product Found'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });

})

//Get a product with product ID
router.get('productid/:productId',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    const id = req.params.productId;
    Product.find({ product_id: id }).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'Product Not Found with product ID'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });
})

//Get product list in men category
router.get('/men',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Product.find({$or: [ { ideal_for: 'Men' }, { ideal_for: 'Unisex' } ] }).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'Product Not Found in Men'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });

})

//Get product list in women category
router.get('/women',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Product.find({$or: [ { ideal_for: 'Women' }, { ideal_for: 'Unisex' } ] }).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'Product Not Found in Women'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });


})

//Get product list in boys category
router.get('/boys',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Product.find({'ideal_for': 'Boys'}).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            console.log(product);
            res.status(201).send({result:'Product Not Found in Boys Category'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });

})

//Get product list in girls category
router.get('/girls',(req,res) => {
    if (!req.body) {
        res.status(400).send({error: "Empty body sent in request"});
        return;
    }
    Product.find({ ideal_for: 'Girls' }).then(product => {
        if(product)
        {
            res.status(201).send(product);
        }
        else
        {
            res.status(201).send({result:'Product Not Found in Girls'});
        }
        
    }).catch((err) => {
        res.status(500).send(err);
    });

})

module.exports = router;