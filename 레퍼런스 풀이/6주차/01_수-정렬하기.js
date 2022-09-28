// 내장 메서드 활용
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => +v);

let [N, ...arr] = input;

arr = arr.sort((a, b) => a - b);

console.log(arr.join('\n'));


// 일일이 console.log 찍는거 느림
// for문으로 result += 하는 거 느림
// join으로 합치고 한번에 console.log 하는 것이 더 빠름
// 퀵정렬 등의 알고리즘이 제일 빠름
