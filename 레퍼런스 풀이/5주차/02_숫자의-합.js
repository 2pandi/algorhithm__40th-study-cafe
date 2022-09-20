let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' '));

let num = input[1][0]; // 문자열 형태
let result = 0;
let indexOfE = num.indexOf('e')

// e숫자 => 10의 지수 -> 합계는 0이므로 slice한다
if(indexOfE >= 0){
    num = num.slice(0, indexOfE);
}

// num이 string이므로 숫자로 변환
for(let i = 0; i < num.length; i++){
    result += Number(num[i])
}

console.log(result);
