const prompt = require('prompt-sync')();

let ask =Number(prompt("How many sides is the dice?: "))

let result = Math.floor(Math.random() * ask) +1;
console.log(result);
