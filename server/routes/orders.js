const express = require('express');
const Razorpay = require('razorpay');
const crypto = require("crypto");

const auth = require("../middlewares/auth");
const Cart = require("../models/cart");
const Order = require("../models/order");

require('dotenv').config();

const router = express.Router();
const rzpKey = process.env.RZP_KEY_ID;
const secret = process.env.RZP_KEY_SECRET;
const currency = 'INR';

const rzpInstance = new Razorpay({
    key_id: rzpKey,
    key_secret: secret,
});

router.post('/', (req, res) => {
    const sessionId = req.session.id;
    Cart.findOne({ sessionId: sessionId }).then(cart => {
        const { totalAmount } = cart;
        const amount = totalAmount * 100;
        const user_id = req.session.userId;
        const order = new Order({ user_id: user_id, amount:amount, currency:currency,status: 'CREATED' });
        order.save().then(() => {
                            const orderId = order.id;
            const options = {
                amount : amount,
                currency : currency,
                //receipt denotes our order id on Razorpay
                receipt: orderId,
            };

            //Create order on razorpay
            rzpInstance.orders.create(options, (err, rzpOrder) => {
                if (err) {
                    res.status(500).send({ error: 'Error in creating razorpay order' });
                    return;
                }

                res.status(201).send({
                    amount,
                    currency,
                    orderId,
                    //This is required by client to co-ordinate with razorpay
                    rzpOrderId: rzpOrder.id
                });
            });
        }).catch(() => {
            res.status(500).send({ error: "Order Creation" });
        });
    }).catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

router.put('/orders/:id', auth.authenticate, (req, res) => {
    const orderId = req.params.id;
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    if (!razorpay_payment_id || !razorpay_signature) {
        res.status(400).error({ error: "Missing razorpay payment id or signature" });
        return;
    }
    const generated_signature = crypto.createHmac('sha256', secret).update(orderId + "|" + razorpay_payment_id).digest('hex');
    if (generated_signature === razorpay_signature) {
        Order.updateOne({ id: orderId }, { $set: { status: 'COMPLETED', razorpay_payment_id, razorpay_order_id, razorpay_signature }}).then(() => {
            res.send(204).send();
        });
    } else {
        res.status(400).send({ error: 'Signature validation failed' });
        return;
    }
});

module.exports = router;