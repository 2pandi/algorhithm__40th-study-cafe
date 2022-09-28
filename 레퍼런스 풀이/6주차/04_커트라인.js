let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(v => v.split(' ').map(v => +v));

let[[N, k],[...arr]] = input;

function pivot(arr, start = 0, end = arr.length+1) {
    let pivot = arr[start];
    let swapIdx = start;
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort(arr)[N - k]);

// 퀵정렬 이용하여 정렬한 후에 N - k번째 인덱스의 요소 출력