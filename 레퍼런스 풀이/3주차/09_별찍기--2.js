let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());

let stars = '';

for(let i = 1; i <= input; i++){
  for(let j = 1; j <= input; j++){
    if(stars.length < input - i) stars += ' ';
    else stars += '*';
  }
  console.log(stars);
  stars = "";
}

// len이 input - i과 같을 때까지 앞에 띄어쓰기 넣고
// len이 input과 같아질 때까지 별찍기
