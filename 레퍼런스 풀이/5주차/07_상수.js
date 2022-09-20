let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// split(" ")으로 배열 요소화 -> map함수로 각각 순서 뒤집음 -> 숫자로 변환
let input = fs.readFileSync(filePath).toString().split(" ").map(v => {
    let numStr = '';
    for(let i = v.length - 1; i >= 0; i--){
        numStr += v[i];
    }
    return numStr;
}).map(v => +v);

let [a, b] = input;

console.log(a > b ? a : b);