const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /orders'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: `You passed an ID : ${id}`
    });
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order has been updated'
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order has been deleted'
    });
});

module.exports = router;