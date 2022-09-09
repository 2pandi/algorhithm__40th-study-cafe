let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

const a = (num) => Math.floor(num / 10);
const b = (num) => num % 10; 

let sum = a(input) + b(input); 
let newNum = (b(input) * 10) + (sum % 10);
let count = 1;

while (newNum !== input) {
    count++;
    sum = a(newNum) + b(newNum);
    newNum = (b(newNum) * 10) + (sum % 10);
}

console.log(count);