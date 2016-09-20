/**
 * Created by j0 on 2016/9/18.
 */
var conn = require('../init/redis')
var log = require('../init/log')
var util = require('util')
var key = 'session:client:%s:userId:%s'
function saveSession(userId, clientId, sessionId, callback) {
    conn.select('0', function () {
        var session = {
            sessionId: sessionId
        }
        conn.hmset(util.format(key, clientId, userId), session, callback)
    })
}


function getSession(userId, clientId, callback) {
    conn.select('0', function () {
        conn.hgetall(util.format(key, clientId, userId), callback)
    })
}

module.exports.saveSession = saveSession
module.exports.getSession = getSession

