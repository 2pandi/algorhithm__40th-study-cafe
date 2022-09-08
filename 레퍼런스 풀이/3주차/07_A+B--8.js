let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let T = Number(input[0]);

for(let i = 1; i <= T; i++){
    input[i] = input[i].split(' ').map(v => Number(v));
    let [A, B] = input[i];
    console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
