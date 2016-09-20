/**
 * Created by j0 on 2016/9/14.
 */
/**
 * redis缓存配置与连接
 * Created by Tristan on 2016/9/2.
 */
var redis = require('redis')
var config = require('../../config')
var log = require('../log')

var redisConn = redis.createClient(config.redis.port, config.redis.host, {})

redisConn.on('error', function () {
    log.error('redis init error')
})


redisConn.on('connect', function () {
    log.debug('redis init success')
})

module.exports = redisConn
