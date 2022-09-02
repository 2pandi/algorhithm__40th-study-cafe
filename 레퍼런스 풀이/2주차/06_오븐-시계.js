let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let now = input[0].split(' ').map(v => Number(v));

let hour = now[0];
let minute = now[1];
let add = Number(input[1]);

minute += add;

if(minute >= 60){
    hour += Math.floor(minute / 60);
    minute %= 60;
}

if(hour >= 24) {hour %= 24;}

console.log(`${hour} ${minute}`);


