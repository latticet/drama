'use strict';

var Koa = require('Koa');
var sha1 = require('sha1');

var config = {
    wechat:{

    }
}

var app = new Koa();

app.use(function *(){
    this.body = 'Hello World';
})

app.listen(3000);
console.log('Listening : 3000');