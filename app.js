const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const index = require('./api/routes/index')
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const bookRoutes = require('./api/routes/books');
const taskRoutes = require('./api/routes/tasks');

app.use(express.json())
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    })
)

app.use('/', index);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/books', bookRoutes);
app.use('/tasks', taskRoutes);

module.exports = app;