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

app.get('/api/providers/imm_active_events', function(req, res) {
    fs.readFile('./test_json/imm_active_events.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_active_events.json');
    });
});

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

app.get('/download/Mini_ScreenShot.png', function(req, res, next) {

    res.download('./test_json/download/miniscreen.png');
});

app.get('/api/providers/rp_screenshot', function(req, res) {
    fs.readFile('./test_json/rp_screenshot.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:rp_screenshot.json');
    });
});

app.get('/api/providers/rp_session', function(req, res) {
    fs.readFile('./test_json/rp_session_get.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:rp_session_get.json');
    });
});

app.post('/api/providers/rp_session', function(req, res) {
    fs.readFile('./test_json/rp_session_post.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:rp_session_post.json');
    });
});

app.get('/api/providers/sessioninfo', function(req, res) {
    fs.readFile('./test_json/sessioninfo.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:sessioninfo.json');
    });
});

app.post('/api/providers/rp_kvm_preemptstatus', function(req, res) {
    fs.readFile('./test_json/rp_kvm_preemptstatus.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:rp_kvm_preemptstatus.json');
    });
});

app.get('/api/dataset/imm_ports', function(req, res) {
    fs.readFile('./test_json/imm_ports.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_ports.json');
    });
})

app.get('/api/dataset/imm_firmware', function(req, res) {
    fs.readFile('./test_json/imm_firmware.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:sys_info.json');
    });
});

app.post('/api/providers/fwupdate', function(req, res) {
    if(req.body.UPD_WebReserve === 1) {
        res.json({return: 0});
    }else {
        fs.readFile('./test_json/fwupdate.json', function(error, fileData) {
            if (error) {
                console.log('read err : ' + error);
            }
            res.json(JSON.parse(fileData));
            console.log('send:sys_info.json');
        });
    }
});

app.post('/upload', function(req, res) {
    res.json({return: 0});
});

app.get('/upload/progress', function(req, res) {
    res.json({return: 0});
});

app.get('/api/providers/heartbeats', function(req, res) {
    fs.readFile('./test_json/heartbeats.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:heartbeats.json');
    });
});

app.get('/api/providers/imm_fod', function(req, res) {
    fs.readFile('./test_json/imm_fod.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_fod.json');
    });
});

app.post('/api/providers/imm_fod', function(req, res) {
    res.json({
        'return': 0
    });
});

app.get('/api/dataset/imm_processors', function(req, res) {
    fs.readFile('./test_json/imm_processors.json', function(error, fileData) {
        if (error) {
            console.log('read err : ' + error);
        }
        res.json(JSON.parse(fileData));
        console.log('send:imm_processors.json');
    });
});