/**Created by Bente on 09-02-2016....*/

var fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var result = str.split('\n');


console.log(result.length-1);