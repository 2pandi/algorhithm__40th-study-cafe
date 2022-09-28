let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => v.split(' ').map(v => +v));

let [[N], arr] = input;

let set = [...new Set(arr)].sort((a, b) => a - b);
let map = new Map()
set.forEach((v, idx) => map.set(v, idx));

arr = arr.map(v => map.get(v));

console.log(arr.join(' '));