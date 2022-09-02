let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(v => Number(v)); // 띄어쓰기로 구분한 경우

let [a, b] = input;

if(b >= 45){
    console.log(`${a} ${b - 45}`);
}

else {
    if(a >= 1){
        console.log(`${a - 1} ${b + 15}`)
    }
    else {console.log(`23 ${b + 15}`)}
}

// 입력이 '10 10' 이면 '9 25' 출력
//🟢한 줄인 경우

