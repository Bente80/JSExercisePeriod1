/**
 * Created by Bente on 12-02-2016.
 */

// opgave 1 gentaget

var names = ["Georgina", "Jeanette", "Susanne", "Sus", "Ann"];

function lengthOfNames(value) {
    if (value.length <= 3) {
        return value;
    }
}

function lettersToUppercase(value) {
    return value.toUpperCase();
}

// opgave2.

function UsingLenthOfNamesFilter(array, lengthOfNamesCallback) {
    var newArrayInThisMethod = [];
    for (var i = 0; i < array.length; i++) {
        if (lengthOfNamesCallback(array[i])) {
            newArrayInThisMethod.push(array[i]);
        }
    }
    return newArrayInThisMethod;
};

function UsingLettersToUppercaseMap(array, callback) {
    var newArrayInThisMethod = [];
    for (var i = 0; i < array.length; i++)
        newArrayInThisMethod.push(callback(array[i]));
    return newArrayInThisMethod;
};

console.log(UsingLenthOfNamesFilter(names, lengthOfNames));
console.log(UsingLettersToUppercaseMap(names, lettersToUppercase));

