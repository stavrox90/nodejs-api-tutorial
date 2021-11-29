const express = require('express');
const router = express.Router();

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig[process.env.ENVIRONMENT])
const tasks = knex('tasks')

router.get('/', async (req, res, next) => {
    await tasks.then(data => {
        res.status(200).json({
            code: 200,
            message: 'Handling GET request to /tasks',
            data: data || {}
        });
    })
        .catch(err => {
            res.status(500).json({
                code: 500,
                message: 'Handling GET request to /tasks',
                error: err
            });
        })
});

router.post('/', async (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /tasks'
    });
});

router.get('/:tasksId', async (req, res, next) => {
    const id = req.params.tasksId;
    res.status(200).json({
        message: `You passed an ID : ${id}`
    });
});

router.patch('/:tasksId', async (req, res, next) => {
    res.status(200).json({
        message: 'Task has been updated'
    });
});

router.delete('/:tasksId', async (req, res, next) => {
    const id = req.params.tasksId;
    await tasks.where({ id: id }).del()
        .then(data => {
            res.status(200).json({
                message: 'Task has been deleted',
                data: data
            });
        })
        .catch(err => {
            res.status(200).json({
                message: 'Task deletion failed',
                error: err
            });
        })
});

module.exports = router;