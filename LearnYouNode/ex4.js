/**Created by Bente on 09-02-2016....*/

var fs = require('fs');

fs.readFile(process.argv[2],function callback(err, contenst){
    var linierAtLæseInd = contenst.toString().split('\n').length-1;
    console.log(linierAtLæseInd);
});

