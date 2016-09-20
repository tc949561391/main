/**
 *
 * Created by j0 on 2016/9/20.
 */
var util = require('util')
var clientKey = "client:%s"
var groupKey = "group:%s:%s"
exports.clientKey=function clientKey(clientId) {

    return util.format(clientKey, clientId)
}


exports.groupKey=function groupKey(clientId, group) {
    return util.format(groupKey, clientId, group)
}

