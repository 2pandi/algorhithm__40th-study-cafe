let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => +v));

let [N, X] = input[0];
let A = input[1];
let result = '';

for(let i = 0; i < N - 1; i++){
    if(A[i] < X){
        result += A[i] + '\ ';
    }
}

if(A[N - 1] < X) result += A[N - 1];

console.log(result);










// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let num = input[0].split(' ').map(x => Number(x));
// let arr = input[1].split(' ').map(x => Number(x));

// const answer = [];

// for (let i = 0; i <= num[0]; i++) {
//     if (num[1] > arr[i]) {
//         answer.push(arr[i]);
//     } 
// }

// console.log(answer.join(' '));