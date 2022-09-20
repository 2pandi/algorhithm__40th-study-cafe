let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// trim()으로 앞 뒤 공백 제거 후 배열화
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// input이 빈 문자열인 경우 0 출력 (['']인 경우 length는 1이므로)
console.log((input[0] === '') ? 0 : input.length);