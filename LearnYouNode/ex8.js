/**Created by Bente on 10-02-2016....*/

var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function callback(response){
    response.pipe(bl(function(error, data) {
        data = data.toString();
        console.log(data.length);
        console.log(data);
        }));
});