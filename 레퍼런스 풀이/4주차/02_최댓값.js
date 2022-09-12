let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => +v);

let max = Math.max(...input);
let idx = input.indexOf(max) + 1;

console.log(`${max}\n${idx}`);