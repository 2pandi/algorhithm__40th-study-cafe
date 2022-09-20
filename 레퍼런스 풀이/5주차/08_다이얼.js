let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const dials = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
// 인덱스 + 3이 걸리는 시간
let takes = 0; // 걸리는 시간 합계

for(let i = 0; i < input.length; i++){
    for(let j = 0; j < dials.length; j++){
        if(dials[j].includes(input[i])) takes += j + 3;
    }
}

console.log(takes);