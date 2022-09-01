//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

if((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0){
    console.log(1);
}
else {
    console.log(0);
}