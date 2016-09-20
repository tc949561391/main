/**
 * Created by j0 on 2016/9/18.
 */
//init socket.io
var log=require('./init/log')
var redis=require('socket.io-redis')
var io = require('socket.io')();
var config=require('./config')

io.adapter(redis(config.socketAdapter));
log.debug('init socket io')
module.exports = io

