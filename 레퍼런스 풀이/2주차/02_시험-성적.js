//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

switch(true){
    case input >= 90:
        console.log('A');
        break;
    case input >= 80:
        console.log('B');
        break;
    case input >= 70:
        console.log('C');
        break;
    case input >= 60:
        console.log('D');
        break;
    default:
        console.log('F');
}