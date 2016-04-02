/*jslint browser:true, node:true, devel:true, nomen:true */

"use strict";

var express = require('express');
var router = express.Router();

var group = require('./api/group');
var user = require('./api/user');
var resource = require('./api/resource');
var transaction = require('./api/transaction');
var purchase = require('./api/purchase');


router.get('/', function (req, res, next) {
    res.json('api lol');
});


router.use('/group', group);
router.use('/user', user);
router.use('/resource', resource);
router.use('/transcation', transaction);
router.use('/purchase', purchase);

module.exports = router;
