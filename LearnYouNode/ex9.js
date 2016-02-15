/**Created by Bente on 10-02-2016....*/

var http = require("http");
var bl = require("bl");
var optæller = 0;
var resultat = [];

for (var i = 0; i < 3; i++) {
    getOneUrlAtATime(i);
}

function getOneUrlAtATime(etArgument) {
    http.get(process.argv[2 + etArgument], function callback(response) {
        response.pipe(bl(function (error, data) {
            // hvis det ikke går godt, udskriver vi en fejlbesked.
            if (error) {
                console.error(error)
            }
            else {
                // get kaldet er gået godt, og jeg ligger nu dataérne ned i resultat arrayet
                resultat[etArgument] = data.toString();
                optæller++;
            }
            if (optæller == 3) {
                // her udskriver jeg indholdet af arrayet, hvis optælleren er 3
                for (var i = 0; i < 3; i++) {
                    console.log(resultat[i]);
                }
            }
        }));
    });
};