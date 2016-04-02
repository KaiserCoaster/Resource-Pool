/*jslint browser:true, node:true, devel:true, nomen:true */

"use strict";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json('api lol');
});

module.exports = router;
