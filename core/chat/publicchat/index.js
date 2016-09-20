/**
 * Created by j0 on 2016/9/19.
 */
var log = require('../../../init/log')
var keyUtil = require('../../util/keyUtil')
function publicchat(message) {
    var client = this
    log.info('publicchat:' + client.id + ' send public message :' + message)
    client.broadcast.in(keyUtil.clientKey(client.client_id)).emit("publicchat", client.userId, message)
}
module.exports = publicchat