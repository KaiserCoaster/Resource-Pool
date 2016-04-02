/*global Promise */
/*jslint browser:true, node:true, devel:true, nomen:true, es5:true */

"use strict";

var express = require('express');
var mysql = require('mysql');
var config = require('./config.json');


var db = {
    
    connection: null,
    
    connect: function () {
        
        var promise = new Promise(function (resolve, reject) {
                
            if (db.connection !== null) {
                resolve(db.connection);
            }
            
            db.connection = mysql.createConnection({
                host     : config.db.host,
                user     : config.db.user,
                password : config.db.pass,
                database : config.db.name
            });

            db.connection.connect(function (err) {
                if (err) {
                    reject(err);
                }
                console.log('connected as id ' + db.connection.threadId);
                resolve(db.connection);
            });

        });
            /*con.config.queryFormat = function (query, values) {
                if (!values) {
                    return query;
                }
                return query.replace(/\:(\w+)/g, function (txt, key) {
                    if (values.hasOwnProperty(key)) {
                        return this.escape(values[key]);
                    }
                    return txt;
                }.bind(this));
            };*/
        return promise;
    },
    
    getUser: function (id) {
        var promise = new Promise(function (resolve, reject) {
            db.connect().then(function (con) {
                con.query("SELECT `Username`, `Email`, `FirstName` FROM `User` WHERE `UserID` = ?",
                    [id],
                    function (error, results, fields) {
                        if (error) {
                            reject(error);
                        }
                        resolve(results);
                    });
            });
        });
        return promise;
    }
    
};


module.exports = db;