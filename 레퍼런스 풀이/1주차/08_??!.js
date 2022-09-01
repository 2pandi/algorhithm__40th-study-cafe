//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim(); // 입력값에 띄어쓰기가 없는 경우 trim()으로 앞뒤 공백 제거

console.log(input + '??!');