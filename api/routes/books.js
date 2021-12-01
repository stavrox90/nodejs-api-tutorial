const router = require('express').Router()
const knex = require('../../database/knexDB')
const books = knex('books')

function successHandler(code, response, result) {
    response.status(code).json({
        message: 'Handling GET request to /books',
        data: result
    });
}

function errorHandler(code, response, error) {
    response.status(code).json({
        message: 'Error handling GET request to /books',
        data: []
    });
}

router.get('/', async (req, res, next) => {
    await books
    .then(data => successHandler(200, res, data))
    .catch(err => errorHandler(500, res, err))
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