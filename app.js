const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const bookRoutes = require('./api/routes/books');

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    })
)

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/books', bookRoutes);

module.exports = app;