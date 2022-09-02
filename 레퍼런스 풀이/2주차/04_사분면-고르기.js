let fs = require('fs');
let input = fs.readFileSync(0).toString().split("\n");

input = input.map(v => Number(v));

let [x, y] = input;

if(x > 0){
    y > 0 ? console.log(1) : console.log(4);
}

else if(x < 0){
    y > 0 ? console.log(2) : console.log(3);
}


//


//🟢여러 줄인 경우