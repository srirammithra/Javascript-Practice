//Arrays example
let varMarksAMA001 = new Array(50, 70, 60, 55, 50);
let varMarksAMA002 = [45, 65, 70, 65, 50];
varMarksAMA001.push(60);
console.log("After push: " + varMarksAMA001);
varMarksAMA001.unshift(55);
console.log("After unshift: " + varMarksAMA001);
varMarksAMA001.pop();
console.log("After pop: " + varMarksAMA001);
console.log("Index Of: " + varMarksAMA001.indexOf(70));
console.log("Includes: " + varMarksAMA001.includes(90));
let varMarksAMA001Sub = varMarksAMA001.slice(2, 5);
console.log("Sub Array: " + varMarksAMA001Sub);
for (let i = 0; i < varMarksAMA002.length; i++) {
    console.log(varMarksAMA002[i]);
}
let varTotalAMA001 = varMarksAMA001.reduce((varSum, varMark) => varSum + varMark, 0);
console.log("Total: " + varTotalAMA001);
let varItemCodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let varEvenCodes = varItemCodes.filter(varCode => varCode % 2 == 0);
console.log("Even codes: " + varEvenCodes);
let varUpdatedEvenCodes = varEvenCodes.map(varCode => varCode + 2);
console.log("Updated Even codes: " + varUpdatedEvenCodes);
let varFruits = ["Banana", "Pineapple", "Grapes", "Apple"];
console.log("Before sort: " + varFruits);
varFruits.sort();
console.log("After sort: " + varFruits);
console.log("Marks ascending sort: " + varMarksAMA002.sort((a, b) => a - b));
console.log("Marks descending sort: " + varMarksAMA002.sort((a, b) => b - a));