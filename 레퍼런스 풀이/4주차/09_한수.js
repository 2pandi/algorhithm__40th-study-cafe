let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function makeDigitArr (num) {
    return `${num}`.split('').map(v => +v);
}

let count = 0;

for(let i = 1; i <= input; i++){
    let numberArr = makeDigitArr(i);
    let gapArr = [];
    for(let j = 0; j < numberArr.length - 1; j++){
        gapArr.push(numberArr[j] - numberArr[j + 1])
    }
    if(new Set(gapArr).size === 1 || new Set(gapArr).size === 0) count ++
}

console.log(count);