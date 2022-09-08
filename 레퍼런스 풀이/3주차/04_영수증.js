let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let X = Number(input[0]);
let N = Number(input[1]);
let result = 0;

for(let i = 2; i <= N + 1; i++){
    input[i] = input[i].split(" ").map(v => Number(v));
    let a = input[i][0];
    let b = input[i][1];
    result += a * b;
}

console.log(result === X ? 'Yes' : 'No');
