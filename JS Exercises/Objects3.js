/**
 * Created by Bente on 12-02-2016.
 */

var car = {
    type: "Audi",
    model: "A4",
    price: "500.000",
    year: "2015",
    tires : "XXXL"
};

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

console.log("Before deleteing: "+ Object.keys(car));

delete car.tires;

console.log("After deleteing: "+ Object.keys(car));
