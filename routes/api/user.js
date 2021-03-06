/*jslint browser:true, node:true, devel:true, nomen:true, es5:true */

"use strict";

var express = require('express');
var db = require('./../../db');
var router = express.Router();

router.post('/', function (req, res, next) {
    db.newUser(req.body.username, req.body.email, req.body.firstname, req.body.password).then(function (result) {
        res.json(result);
    }).catch(function (error) {
        res.json(error);
    });
});

router.get('/:id', function (req, res, next) {
    db.getUser(req.params.id).then(function (result) {
        res.json(result);
    }).catch(function (error) {
        res.json(error);
    });
});

router.put('/:id', function (req, res, next) {
    res.json('updating user with id ' + req.params.id);
});


router.get('/:id/groups', function (req, res, next) {
    res.json('getting groups that user with id ' + req.params.id + ' is in');
    
    db.getGroupsWithUser(req.params.id).then(function (result) {
        res.json(result);
    }).catch(function (error) {
        res.json(error);
    });
    
});


module.exports = router;