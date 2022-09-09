let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(v => v.split(' ').map(v => + v));

for(let i = 0; i < input.length; i++){
    let [a, b] = input[i];
    if(0 < a, b < 10)console.log(a + b);
}
