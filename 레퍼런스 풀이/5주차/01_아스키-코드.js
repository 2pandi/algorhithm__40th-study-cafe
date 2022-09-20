let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

// String.prototype.charCodeAt(index)
// 문자열 인덱스 값의 ASCII 코드 값을 반환한다.
console.log(input.charCodeAt(0));