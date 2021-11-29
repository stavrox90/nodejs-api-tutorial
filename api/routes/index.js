const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /index'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /index'
    });
});

router.get('/:index', (req, res, next) => {
    const id = req.params.index;
    res.status(200).json({
        message: `You passed an ID : ${id}`
    });
});

router.patch('/:index', (req, res, next) => {
    res.status(200).json({
        message: 'Index has been updated'
    });
});

router.delete('/:index', (req, res, next) => {
    res.status(200).json({
        message: 'Index has been deleted'
    });
});

module.exports = router;