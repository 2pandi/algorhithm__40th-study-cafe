let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = +input[0];
let count = 0;

// str이 그룹단어인지 판별하는 함수
function isGroup (str) {
    let checked = '';
    for(let i = 0; i < str.length; i++){
        if(!checked.includes(str[i])) checked += str[i];
        else if(checked[checked.length - 1] === str[i]) continue;
        else return false;
    }
    return true;
}

for(let i = 1; i <= N; i++){
    if(isGroup(input[i])) count ++;
}

console.log(count);