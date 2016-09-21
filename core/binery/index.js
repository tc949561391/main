/**
 * Created by j0 on 2016/9/19.
 */
var fs = require('fs');
function base64Img(data) {
    var client = this
    console.log(data)
    client.broadcast.emit('pppbinery', data)
}
module.exports.base64Img = base64Img


