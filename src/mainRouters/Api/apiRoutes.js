const express = require('express');
const route = express.Router();
const apiController = require('../../controllers/Api/apiController')


route.get('/', apiController.apiController);


module.exports = route;