/**
 *
 * Created by j0 on 2016/9/18.
 */
var url = require('url')
var util=require('util')
var queryString = require('querystring')
var log = require('../../init/log')
var sessionStore=require('../../dao/sessionStore')
var keyUtil=require('../util/keyUtil')

function authLogin(client, callback) {
    var clienturl =client.conn.request.url
    log.info(client.id + '---start auth with '+clienturl)
    var params = queryString.parse(url.parse(clienturl).query)
    if (params.access_token == null || params.client_id == null) {
        client.emit('authFalure', 'authFalure')
        client.disconnect(true)
        log.info(client.id + '---auth falure and disconnect')
        return
    }
    sessionStore.getSession(params.access_token,params.client_id,function (err,session) {
        if (session!=null){
            client.broadcast.to(session.sessionId).emit('logout',405,'异地登陆')
        }

        sessionStore.saveSession(params.access_token,params.client_id,client.id,function (err) {
            if (err){
                client.emit('authFalure', 'authFalure')
                client.disconnect(true)
                log.info(client.id + '---auth falure and disconnect')
                return
            }
            client.client_id=params.client_id
            client.userId=params.access_token

            log.info(client.id + '---auth success and getconnect')
            client.join(keyUtil.clientKey(params.client_id))
            callback()
        })
    })
}
module.exports.authLogin = authLogin