
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map(v => v.replace(/ /g, ""));

for(let i = 1; i <= input[0]; i++){
    console.log(Number(input[i][0]) + Number(input[i][1]));
}

