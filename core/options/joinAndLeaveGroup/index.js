/**
 * Created by j0 on 2016/9/19.
 */
var keyUtil = require('../../util/keyUtil')
var log = require('../../../init/log')


function joingroup(groupId) {
    var client = this
    log.info(client.userId + '  joingroup ' + groupId)
    client.join(keyUtil.groupKey(client.client_id, groupId))
}

function leavegroup(groupId) {
    var client = this
    log.info(client.userId + '  leavegroup ' + groupId)
    client.leave(keyUtil.groupKey(client.client_id, groupId))
}

module.exports.joingroup = joingroup
module.exports.leavegroup = leavegroup