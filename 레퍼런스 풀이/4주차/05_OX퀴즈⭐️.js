let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
input = input.slice(0, Number(input[0]) + 1);

let point = 0;
let line = [];

for(let i = 1; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j - 1] !== 'O' && input[i][j] === 'O') {point = 1;}
        else if(input[i][j] === 'O') {point ++}
        else {point = 0}
        line.push(point);
    }
    line = line.reduce((pre, cur) => pre + cur)
    console.log(line);
    line = [];
    point = 0;
}