const express = require('express');
const lib = require('../lib/orderlib');

let router = express.Router();

router.get('/', (req, res) => {
    lib.getOrders().then(orders => res.send(orders)).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:date', (req, res) => {
    lib
        .getOrdersByDate(new Date(req.params.date))
        .then(orders => res.send(orders))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    lib
        .addOrder(req.body)
        .then(id => res.status(201).send({id: id}))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    lib.editOrder(req.body).then(() => res.sendStatus(200)).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/confirm/:id', (req, res) => {
    lib
        .confirmOrder(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    lib
        .deleteOrder(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;