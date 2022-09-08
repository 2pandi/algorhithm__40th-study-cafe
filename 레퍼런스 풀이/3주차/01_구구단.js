let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

for(let i = 1; i <= 9; i++){
    console.log(`${input} * ${i} = ${input * i}`);
}