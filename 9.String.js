//String functions
let varAutomation = "Selenium";
let varLanguages = "Java#JavaScript#TypeScript#Python";
console.log("Upper case: " + varAutomation.toUpperCase());
console.log("Lower case: " + varAutomation.toLowerCase());
console.log("Length: " + varAutomation.length);
console.log("Index of: " + varAutomation.indexOf("i"));
console.log("Last Index of: " + varAutomation.lastIndexOf("e"));
console.log("SubString: " + varAutomation.slice(5, 8));
let varLangs = varLanguages.split("#");
console.log(varLangs);
let varYear1 = "2009";
let varYear2 = "2023";
let varExp = parseInt(varYear2) - parseInt(varYear1);
console.log("EXP: " + varExp);

//Count the number of occurances
let varMainText = "HI HELLO HI HELLO HI";
let varCount = 0;
let varValue = varMainText.indexOf("HELLO");
while (varValue != -1) {
    varCount++;
    varValue = varMainText.indexOf("HELLO", varValue + 1);
}
console.log("Occurance: " + varCount);