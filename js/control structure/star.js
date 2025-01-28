//star

let rows = 5;

for(let i = 1; i<=rows;i++)
{
    let pattern="";
    for(let j=1;j<=i;j++)
    {
        pattern += "*";
    }
    console.log(pattern);
}

//largest


let num1=parseFloat(prompt("Enter first number:"));
let num2=parseFloat(prompt("Enter Secons number:"));
let num3=parseFloat(prompt("Enter Third number:"));

let largest;

if(num1>=num2 && num1<=num3)
{
    largest = num1;

}else if(num2>= num1 && num2>=num3)
{
    largest= num2;
}else{
    largest=num3;

}
console.log(`the largest number is: ${largest}`);
