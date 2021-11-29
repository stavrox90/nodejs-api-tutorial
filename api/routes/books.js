const express = require('express');
const DB = require('../../services/db')
const router = express.Router();

router.get('/', (req, res, next) => {
    DB.query('SELECT * FROM books ORDER BY id desc', (err, rows) => {
        if(err) {
            // console.log("error", err)
            throw err
        } else {
            // console.log("data", rows)
            res.status(200).json({
                message: 'Handling GET request to /books',
                data: rows
            });
        }
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /books'
    });
});

router.get('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    res.status(200).json({
        message: `You passed an ID : ${id}`
    });
});

router.patch('/:bookId', (req, res, next) => {
    res.status(200).json({
        message: 'Book has been updated'
    });
});

router.delete('/:bookId', (req, res, next) => {
    res.status(200).json({
        message: 'Book has been deleted'
    });
});

module.exports = router;