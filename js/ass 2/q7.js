//bigint

let bigNumber=123456789123456789n;
let result=bigNumber*2n;
console.log("result:" +result);

//symbol

let symbol1=Symbol("unique");
let symbol2=Symbol("unique");

console.log(symbol1 === symbol2);
console.log(symbol1 !== symbol2);