let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(v => Number(v)); // 띄어쓰기로 구분한 경우

const set = new Set(input);
let [a, b, c] = input;

if([...set].length === 1) {console.log(10000 + a * 1000)}

else if([...set].length === 2) {
    if (a === b || a === c) console.log(1000 + a * 100);
    else console.log(1000 + b * 100);
}

else console.log((Math.max(a, b, c)) * 100);

