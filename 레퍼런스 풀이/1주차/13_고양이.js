// \    /\
//  )  ( ')
// (  /  )
//  \(__)|

//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

console.log('\\    /\\\n )  ( \')\n(  /  )\n \\(__)|');