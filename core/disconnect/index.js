/**
 *
 * Created by j0 on 2016/9/20.
 */
var keyUtil=require('../util/keyUtil')
function disconnect() {
    var client = this
    client.server.in(keyUtil.clientKey( client.client_id)).emit('leave',client.userId)
}

module.exports = disconnect
