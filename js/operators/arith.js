
let num1=10;
let num2=5;

let addition = num1+num2;
let subtraction= num1-num2;
let multiplication=num1*num2;

let division;
let modulus;

if(num2 !==0)
{
    division =num1 /num2;
    modulus= num1 % num2;

}else{
    division = "Undefined(cannot divide by zero)";
    modulus= "Undefined(cannot divide by zero)";

}

console.log("Result:");
console.log(`Addition: ${addition}`);
console.log(`Subtraction:${subtraction}`);
console.log(`Multiplication:${multiplication}`);
console.log(`Division:${division}`);
console.log(`Modulus:${modulus}`);

