const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const shopController=require('../controller/products.js')

const router = express.Router();

router.get('/', shopController.getProducts);

module.exports = router;
