//🟢여러 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let three = Number(input[0]) * Number(input[1][2]);
let four = Number(input[0]) * Number(input[1][1]);
let five = Number(input[0]) * Number(input[1][0]);
let six = Number(input[0]) * Number(input[1]);

console.log(`${three}\n${four}\n${five}\n${six}`);