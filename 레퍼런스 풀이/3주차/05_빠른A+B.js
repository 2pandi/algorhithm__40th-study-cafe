let fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = Number(input[0]);
let result = ""

for(let i = 1; i < T; i++){
    input[i] = input[i].split(" ").map(v => Number(v));
    let a = input[i][0];
    let b = input[i][1];
    result += a + b + '\n';
}

input[T] = input[T].split(" ").map(v => Number(v));
result += input[T][0] + input[T][1];

console.log(result);