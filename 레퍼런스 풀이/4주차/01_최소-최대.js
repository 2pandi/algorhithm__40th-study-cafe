let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => +v));

let [N, arr] = input;
let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(`${min} ${max}`);