/**
 * Created by Bente on 12-02-2016.
 */

//In JavaScript, a variable can be declared after it has been used. This is called hoisting.

// Dette virker fordi deklerationen "x" er hoisted også selv om vi ikke havde deklareret den.
x = 5;
console.log(x);

var x;

//Her bliver "jubiii" ikke udskrevet, fordi "opgaven" ikke er hoisted.

EnfedSætning = "det kører bare";

console.log(EnfedSætning);

EnfedSætning = "jubiii";

var EnfedSætning;

// en funktion kan også være hoisted:

hoisted();

function hoisted(){
    console.log("Denne metode er også hoisted");
}

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current
// scope (to the top of the current script or the current function).
// To avoid bugs, always declare all variables at the beginning of every scope.