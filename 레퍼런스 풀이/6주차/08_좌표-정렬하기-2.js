let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => v.split(' ').map(v => +v));

let [[N], ...arr] = input;
arr.sort(([x,y],[x1,y1]) => x - x1);
arr.sort(([x,y],[x1,y1]) => y - y1);
let result = arr.join('\n')

console.log(result.replaceAll(',', ' '));