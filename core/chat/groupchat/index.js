/**
 * Created by j0 on 2016/9/19.
 */
var log = require('../../../init/log')
var keyUtil = require('../../util/keyUtil')


function groupchat(togroup, message) {
    var client = this
    log.info('groupchat:' + client.userId + ":" + togroup + ":" + message)
    client.server.to(keyUtil.groupKey(client.client_id, togroup)).emit('groupchat', client.userId, togroup, message)
}
module.exports = groupchat