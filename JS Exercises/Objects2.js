/**
 * Created by Bente on 12-02-2016.
 */

//Constructor function to make objects
function createNewPersonObject(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getPersonObjekt: function () {
            return "Name: " + this.firstName;
        }
    }
}

var newPerson = createNewPersonObject("Mikkel", "Vig", "25");
console.log(newPerson.getPersonObjekt());

