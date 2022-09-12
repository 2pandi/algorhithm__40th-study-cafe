let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => +v));

let C = input[0];

for(let i = 1; i <= C; i++){
    let N = input[i][0];
    let caseArr = input[i];
    let ave = (caseArr.slice(1, N + 1).reduce((pre,cur) => pre + cur)) / N;
    let count = 0;
    for(let j = 1; j <= N; j++){
        if(caseArr[j] > ave) count++;
    }
    let result = `${(count / N * 100).toFixed(3)}`;
    console.log(result + '%');
}