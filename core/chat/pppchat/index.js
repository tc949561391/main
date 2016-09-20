/**
 * Created by j0 on 2016/9/19.
 */
var log=require('../../../init/log')
var sessionStore=require('../../../dao/sessionStore')
function pppchat(to,message) {
    var client=this
    sessionStore.getSession(to,client.client_id,function (err,session) {
        if (session){
            log.info(to+":"+message)
            client.broadcast.to(session.sessionId).emit('pppchat',client.userId,message)
        }
    })
}
module.exports=pppchat

