/**Created by Bente on 09-02-2016....*/

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function callback(err, list){
// listen indeholder alt på den givne directory
list.forEach(function (enFileiListen){
// for hver element i listen finder vi sidste element vha extname
// hvis slutningen af filnavnet er . + et argument mere.
    if(path.extname(enFileiListen) == '.'+ process.argv[3])
    // så skal de filnavnet printes ud.
        console.log(enFileiListen);
    });
});