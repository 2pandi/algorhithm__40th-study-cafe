//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" "); // 띄어쓰기로 구분한 경우

input = input.map(v => parseInt(v));
let A = input[0];
let B = input[1];
let C = input[2];

console.log(`${(A + B) % C}\n${((A % C) + (B % C)) % C}\n${(A * B) % C}\n${((A % C) * (B % C)) % C}\n`);

