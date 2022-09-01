//          ,r'"7
// r`-_   ,'  ,/
//  \. ". L_r'
//    `~\/
//       |
//       |

//🟢한 줄인 경우
let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim(); // 띄어쓰기 없는 경우

console.log('         ,r\'"7\nr`-_   ,\'  ,/\n \\. ". L_r\'\n   `~\\/\n      |\n      |');