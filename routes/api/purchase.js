/*jslint browser:true, node:true, devel:true, nomen:true */

"use strict";

var express = require('express');
var router = express.Router();


router.get('/:id', function (req, res, next) {
    res.json('getting purchase with id ' + req.params.id);
});


module.exports = router;