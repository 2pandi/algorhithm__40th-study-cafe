let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => +v));

let N = input[0][0];
let arr = input[1]
let M = Math.max(...arr);
let arrSum = 0;

for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] / M * 100;
    arrSum += arr[i];
}

console.log(arrSum / N);