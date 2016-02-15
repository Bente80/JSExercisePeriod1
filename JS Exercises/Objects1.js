/**
 * Created by Bente on 12-02-2016.
 */

//opgave 1.

// Her laver jeg et objekt med 4 propeties
var person = {name:"Bente", height:"1.70", eyecolor: "green", favoritColor:"yellow"};

// Her udskriver jeg hver propetie i objektet, efter at have løbet det igennem.
for (item in person) {
    console.log(person[item]);
}
// Her deleter jeg en propeti i objektet
delete person.height;

// Her looper jeg objektet igennem igen og udskriver hver propetie i objektet efter propetién height er slettet.
for (item in person) {
    console.log(person[item]);
}

// Her bruger jeg inherritence til at se om mit objekt ikke indeholder en bestemt propeti.
console.log(person.hasOwnProperty("name"));

// Her bruger jeg inherritence til at se om mit objekt ikke indeholder en bestemt propeti. Hvis det går det, udskriver jeg det.
if (person.hasOwnProperty("name")){
    console.log("Mit objekt har propitien name: "+person.name);
}