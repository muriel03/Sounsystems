const express = require('express');
const route = express.Router();
const usersApi = require('../../controllers/Api/usersApi');
const productApi = require('../../controllers/Api/productApi');

//endPoint Users
route.get('/users', usersApi.getUser);
route.get('/users/:id', usersApi.getUserById);

//endPoint Products
route.get('/products', productApi.getProduct);
route.get('/products/:id', productApi.getProductById);


module.exports = route;