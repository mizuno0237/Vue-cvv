'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/pages'));

app.listen(3000);
let allMsg = [];

app.post('/api/login', function(req, res) {
    res.json({
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzIyNDIxNDQsIm5iZiI6MTQ3MjI0MjE0NCwiaWRlbnRpdHkiOiIwODAwMDAwMC0wODAwLTQwMDAtODgwMC0wMDAwMDgwMDAwMDAifQ.8CeJ4GfxKAcHH8cL9xBquwFTz2I29gV2vAvllTgTHwo",
        reason: 1
    })
});

app.get('/api/providers/limit_session', function(req, res) {
    res.json({
        limitCliSessNum: 2,
        limitRedfishSessNum: 16,
        limitWebSessNum: 10,
        maxCliSessNum: 2,
        maxRedfishSessNum: 16,
        maxWebSessNum: 10,
        return: 0
    })
})

app.get('/api/providers/imm_fod_tier', function(req, res) {
    res.json({
        "return": 0, 
        "tier": 3
    })
})