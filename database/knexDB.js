const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[process.env.ENVIRONMENT])

module.exports = knex