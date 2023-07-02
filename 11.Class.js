module.exports = class Person {
    varFirstName;
    varLastName;
    varAge = 39;
    get varLocation() {
        return "Mysore";
    }
    constructor(varFirstName, varLastName) {
        this.varFirstName = varFirstName;
        this.varLastName = varLastName;
    }

    PrintFullName() {
        console.log(this.varFirstName + " " + this.varLastName);
    }
}
//let objPerson1 = new Person("SRIRAM MITHRA", "G");
//objPerson1.PrintFullName();