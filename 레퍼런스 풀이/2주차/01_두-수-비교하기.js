//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" "); // 띄어쓰기로 구분한 경우

input = input.map(v => Number(v));
let [A, B] = input;

switch(true){
    case A > B:
        console.log('>');
        break;
    case A < B:
        console.log('<');
        break;
    default:
        console.log('==');

}