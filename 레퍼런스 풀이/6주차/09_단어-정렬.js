let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input = [...new Set(input.sort())];

for(let i = 0; i < input.length; i++){
    let len = input[i].length;
    input[i] = [input[i], len];
};

input.sort(([a, b], [c, d]) => b - d);

for(let i = 0; i < input.length; i++){
    input[i] = input[i][0];
}

console.log(input.join('\n'));