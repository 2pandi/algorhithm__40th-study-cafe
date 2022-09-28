let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => +v);

let [N, ...arr] = input;

// 오름차순 정렬
arr = arr.sort((a, b) => a - b);

// map (key = arr의 요소, val = 요소의 빈도)
const map = new Map();
let max = 1;
for(let number of arr){
    if(map.has(number)){
        max = Math.max(max, map.get(number) + 1);
        map.set(number, map.get(number) + 1);
    }else map.set(number, 1);
}

// 최빈값이 들어간 배열
const maxArr = [];
for(let [key, val] of map){
    if(val === max) maxArr.push(key);
};

/**
 * a. 산술평균: N개의 수들의 합을 N으로 나눈 값
 * b. 중앙값: N개의 수를 오름차순 정렬 후 중앙에 위치한 값
 * c. 최빈값: N개의 수 중 가장 많은 값(여러개면 두 번째 작은 값)
 * d. 범위: N개의 수 중 최댓값 - 최솟값
 */

let a = Math.round(arr.reduce((a, b) => a + b) / N);
let b = arr[(N - 1) / 2];
let c = (maxArr.length === 1) ? maxArr[0] : maxArr[1];
let d = arr[arr.length - 1] - arr[0];

let answer = [a, b, c, d];
console.log(answer.join('\n'));