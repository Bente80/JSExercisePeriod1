/**Created by Bente on 10-02-2016....*/

var net = require('net');
var portnr = process.argv[2];
var dataString = "";

var server = net.createServer(function (socket) {
    var denEksakteDato = new Date();

    dataString += denEksakteDato.getFullYear()+"-";
    dataString += ('0' + (denEksakteDato.getMonth()+1)).slice(-2) +"-";
    dataString += ('0' + denEksakteDato.getDate()).slice(-2) +" ";
    dataString += ('0' + denEksakteDato.getHours()).slice(-2) +":";
    dataString += ('0' + denEksakteDato.getMinutes()).slice(-2);

    socket.end(dataString+"\n");
});
server.listen(portnr);

