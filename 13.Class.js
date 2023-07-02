const Person = require("./11.Class");
module.exports = class Employee extends Person {
    get varLocation() {
        return "Bangalore";
    }
    constructor(varFirstName, varLastName){
        super(varFirstName, varLastName);
    }
}