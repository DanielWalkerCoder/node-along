const getInput = require("./get-input.js");
const {fizzy} = require("../fizzy/main.js")
const num = getInput()
console.log(fizzy(num))