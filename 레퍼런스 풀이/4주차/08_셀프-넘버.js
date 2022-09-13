function d (n) {
    let arr = `${n}`.split('').map(v => +v);
    return n + arr.reduce((pre,cur) => pre + cur);
}

let notSelfNum = [];

let i = 1;
while(i < 10000){
    notSelfNum.push(d(i))
    i++
}

for(let i = 1; i < 10000; i++){
    if(!notSelfNum.includes(i)){
        console.log(i);
    }
}