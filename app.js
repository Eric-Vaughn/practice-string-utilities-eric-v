const stringUtil = require("./stringUtils");

const string1 = "hello world";
const string2 = "hello";
const emptyString = "";

console.log(stringUtil.capitalize(string1));
console.log(stringUtil.reverse(string1));
console.log(stringUtil.contains(string1, string2));
