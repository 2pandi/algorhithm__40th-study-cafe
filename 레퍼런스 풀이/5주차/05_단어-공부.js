let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toUpperCase();

// 각 문자열이 들어있는 배열(중복 배제)
let chars = [];
for(let i = 0; i < input.length; i++){
    if(!chars.includes(input[i])){
        chars.push(input[i]);
    }
}

// 문자열의 개수가 들어있는 배열
let numOfChars = [];
for(let i = 0; i < chars.length; i++){
    const regex = new RegExp(`${chars[i]}`, 'g'); // /chars[i]/g
    numOfChars.push(input.match(regex).length);
}

// numOfChars에서 최대값
const max = Math.max(...numOfChars);

// max가 numOfChars에 2개 이상인 경우 ? 출력
console.log((numOfChars.filter(v => v === max).length > 1)
? '?'
: chars[numOfChars.indexOf(max)])