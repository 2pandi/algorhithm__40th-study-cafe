let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let Croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = input;

for(let i = 0; i < Croatian.length; i++){
    let regex = new RegExp(Croatian[i], 'g'); // /Croatian[i]/g
    result = result.replace(regex, '_'); // 크로아티아 알파벳이면 '_'으로 변환
}

console.log(result.length);
