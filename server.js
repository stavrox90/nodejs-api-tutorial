const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')})
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = require('./app');

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Handling GET request to /index',
//         data: []
//     });
    
// });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

// const http = require('http');
// require('dotenv').config()

// const port = process.env.PORT || 4000;

// const server = http.createServer(app);

// const test = async (knex) => {
//     console.log('test', knex)
// }

// test()

// server.listen(port, console.log("now listening on port " + port));