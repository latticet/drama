'use strict';

var Koa = require('koa');
var sha1 = require('sha1');

var config = {
    wechat:{
        appId: 'wx6db38a33f2879d49',
        appSecret: 'ba44eb2f7c4d62af877607f2380a6f54',
        token: 'yaowenzhang3321'
    }
}

var app = new Koa();

app.use(function *(){

    console.log(this.query);

    var token = config.wechat.token;
    var signature = this.query.signature;
    var timestamp = this.query.timestamp;
    var nonce = this.query.nonce;
    var echostr = this.query.echo.str;

    var str = [token, timestamp, nonce].sort().join("");
    var sha = sha1(str);

    sha === signature ? this.body = echostr : this.body = 'wrong';

})

app.listen(3000);
console.log('Listening : 3000');