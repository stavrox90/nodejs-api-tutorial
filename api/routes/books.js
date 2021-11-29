const express = require('express');
// const DB = require('../../services/db')
const router = express.Router();

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig[process.env.ENVIRONMENT])

const books = knex('books')

router.get('/', (req, res, next) => {
    books.then(data => {
        res.status(200).json({
            message: 'Handling GET request to /books',
            data: data
        });
    })
        .catch(err => {
            res.status(500).json({
                message: 'Handling GET request to /books',
                data: []
            });
        })
    // res.status(200).json({
    //     message: 'Handling GET request to /books'
    // });
});

router.post('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Handling POST request to /books'
    // });
});

router.get('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    books.where({ id: id })
        .then(data => {
            res.status(200).json({
                message: `You passed an ID : ${id}`,
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                message: `Error handling request for : ${id}`
            });
        })
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