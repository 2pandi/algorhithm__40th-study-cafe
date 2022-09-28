let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => v.split(' '));

input.shift();

input = input.sort(([a, b], [c, d]) => a - c).map(v => v.join(' '));

console.log(input.join('\n'));