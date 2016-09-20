/**
 * Created by j0 on 2016/9/18.
 */
var io = require('../../app')
var log = require('../../init/log')
var message = require('../chat')
var binery = require('../binery')
var options=require('../options')
var auth = require('../auth')
var disconnect=require('../disconnect')
module.exports.init = function init() {
    io.on('connection', function (client) {
        log.info(client.id + '---connection success')
        auth.authLogin(client, function () {
            client.server.emit('join',client.userId+client.client_id)

            client.on("pppchat", message.pppchat)

            client.on("publicchat", message.publicchat)

            client.on('joingroup',options.joingroup)

            client.on('leavegroup',options.leavegroup)

            client.on('groupchat',message.groupchat)

            client.on("pppbinery",binery.base64Img)

            client.on('message',function (ms) {

                log.info('message :'+ms)
            })

            client.on('disconnect',disconnect)
        })

    })
}










