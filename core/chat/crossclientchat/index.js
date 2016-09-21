/**
 * Created by j0 on 2016/9/21.
 */
var keyUtil = require('../../util/keyUtil')
var log = require('../../../init/log')
var sessionStore = require('../../../dao/sessionStore')
function crossclientchat(to, clientId, message) {
    log.info('crossclientchat :')
    var client = this
    sessionStore.getSession(to, clientId, function (err, session) {
        if (err) return;
        client.broadcast.to(session.sessionId).emit('pppchat', client.userId, client.client_id, message)
    })
}
module.exports = crossclientchat