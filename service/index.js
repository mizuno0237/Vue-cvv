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
let username = '';

app.post('/api/login', function(req, res) {
    console.log(req.body.username);
    username = req.body.username;
    res.json({
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NzIyNDIxNDQsIm5iZiI6MTQ3MjI0MjE0NCwiaWRlbnRpdHkiOiIwODAwMDAwMC0wODAwLTQwMDAtODgwMC0wMDAwMDgwMDAwMDAifQ.8CeJ4GfxKAcHH8cL9xBquwFTz2I29gV2vAvllTgTHwo",
        // reason: 1
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

app.get('/api/dataset/sys_inventory', function(req, res) {
    console.log(req.query.params)
    if (req.query.params == 'Sys_GetInvGeneral') {
        fs.readFile('./test_json/Sys_GetInvGeneral.json', function(error, fileData) {
            if (error) {
                console.log('read err : ' + error);
            }
            res.json(JSON.parse(fileData));
            console.log('send:Sys_GetInvGeneral.json');
        });
    } else {
        fs.readFile('./test_json/sys_inventory.json', function(error, fileData) {
            if (error) {
                console.log('read err : ' + error);
            }
            res.json(JSON.parse(fileData));
            console.log('send:sys_inventory.json');
        });
    }
});

app.get('/api/dataset/imm_properties', function(req, res) {
    fs.readFile('./test_json/imm_properties.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_properties.json');
    });
});

app.get('/api/dataset/imm_status_power', function(req, res) {
    fs.readFile('./test_json/imm_status_power.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_status_power.json');
    })
});

app.get('/api/providers/logoninfo', function(req, res) {
    fs.readFile('./test_json/logoninfo.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:logoninfo.json');
    });
});

app.get('/api/dataset/sys_info', function(req, res) {
    fs.readFile('./test_json/sys_info.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:sys_info.json');
    });
});