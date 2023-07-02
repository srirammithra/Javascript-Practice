//var example - scope global level & functional level
function Print() {
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    }
    console.log("Outside for loop: " + i);
}
Print();
// var can be redecalred
var varEMPID = 101;
var varEMPID = 102;
console.log(varEMPID);
//let example - scope global level and block level
function Display() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
    //console.log("Outside for loop: " + i);
}
Display();
//let cannot be redeclared
let varEID = 101;
//let varEID = 101;
console.log(varEID);
//const example
const varName = "SRIRAM";
console.log(varName);
//varName = "MITHRA";
