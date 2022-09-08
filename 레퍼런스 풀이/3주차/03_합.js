let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

let result = 0;
for(let i = 0; i <= input; i++){
  result += i
}

console.log(result);