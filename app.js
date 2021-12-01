const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

// import routes
const index = require('./api/routes/index')
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const bookRoutes = require('./api/routes/books');
const taskRoutes = require('./api/routes/tasks');

// app settings
app.use(express.urlencoded({ extended: false })).use(express.json())
app.set('port', +process.env.PORT ?? 5000)

app.use('/', index);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/books', bookRoutes);
app.use('/tasks', taskRoutes);

module.exports = app;