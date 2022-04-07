'use restrict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');

const app = express();

mongoose.connect(process.env.CONECT_DB_STRING);

//Carregar Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));






app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;