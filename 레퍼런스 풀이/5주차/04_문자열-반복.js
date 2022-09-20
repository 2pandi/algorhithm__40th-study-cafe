let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' '));

let T = +input[0]; // 테스트 개수
let result = '';

for(let i = 1; i <= T; i++){
    let R = +input[i][0]; // 문자열 반복 횟수
    let S = input[i][1]; // 문자열
    for(let j = 0; j < S.length; j++){
        // String.prototype.repeat(num) 문자열을 num만큼 반복하여 반환
        result += S[j].repeat(R);
    }
    result += '\n';
}
// String.prototype.substring(start, end)
// 문자열의 start인덱스에서 end인덱스까지 반환 ('\n' 지우기)
result = result.substring(0, result.length - 1);
console.log(result);