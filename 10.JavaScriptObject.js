//JavaScript object example
let objPerson = {
    varFirstName: "SRIRAM MITHRA",
    varLastName: "G",
    varAge: 40,
    varMobile: "9538345176",
    varFullName: function () {
        return this.varFirstName + " " + this.varLastName;
    }
}
console.log(objPerson.varFirstName);
console.log(objPerson["varFirstName"]);
objPerson.varFirstName = "SRIRAM";
console.log(objPerson.varFirstName);
console.log("Full Name: " + objPerson.varFullName());
objPerson.varEmail = "srirammithra@gmail.com";
console.log(objPerson);
delete objPerson.varEmail;
console.log(objPerson);
console.log("varEmail" in objPerson);
//
for (let varKey in objPerson) {
    console.log(objPerson[varKey]);
}
