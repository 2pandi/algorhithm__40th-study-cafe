//한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = input.map(a => Number(a));

console.log(input[0] / input[1]);