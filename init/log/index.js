/**
 * Created by j0 on 2016/9/18.
 */
var log4j=require('log4js')
var logConf=require('./../../config/log.json')

log4j.configure(logConf)

module.exports=log4j.getLogger('stats')