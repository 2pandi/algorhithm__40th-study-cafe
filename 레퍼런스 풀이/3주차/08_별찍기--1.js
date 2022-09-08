
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim()); // 띄어쓰기 없는 경우

let stars = '';

for(let i = 1; i <= input; i++){
  stars += '*';
  console.log(stars);
}
