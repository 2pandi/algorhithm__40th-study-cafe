//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" "); // 띄어쓰기로 구분한 경우

input = input.map(v => parseInt(v));
let originalPieces = [1, 1, 2, 2, 2, 8]
input = input.map((v, idx) => originalPieces[idx] - v)

console.log(...input);
