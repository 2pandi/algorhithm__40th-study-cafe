let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => +v));


function sumHead (arr) {
    let [head, ...tail] = arr;
    let headSum = head[0] + head[1]
    if (tail[0][0] === 0) {
        console.log(headSum);
    }
    else {
        console.log(headSum);
        sumHead(tail);
    }
}

sumHead(input);
