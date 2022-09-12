let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => +v);

input = [...new Set(input.slice(0, 10).map(v => v % 42))]


console.log(input.length);
