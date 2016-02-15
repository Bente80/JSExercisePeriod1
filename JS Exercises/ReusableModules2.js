/**
 * Created by Bente on 12-02-2016.
 */

objectBuilder = (function(){

var reusableModule = {};

    reusableModule.age;
    reusableModule.name;

    reusableModule.setAge = function(myAge){
        reusableModule.age = myAge;
    }

    reusableModule.setName = function(myName){
        reusableModule.name = myName;
    }

    reusableModule.getInfo = function(){
        return "Name: "+reusableModule.name+" Age: "+reusableModule.age;
    }

    return reusableModule;
});

    var newObjekt = objectBuilder();
    var anotherNewObjekt = objectBuilder();

    newObjekt.setAge("31");
    newObjekt.setName("Georgina");
    anotherNewObjekt.setAge("33");
    anotherNewObjekt.setName("Steffen");

    console.log(newObjekt.getInfo());
    console.log(anotherNewObjekt.getInfo());