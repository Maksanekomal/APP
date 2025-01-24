const number=5;

let factorial = 1;

if(number<0)
{
    console.log("Factorial of a negative number is not defined");

}
else{
    for(let i=1;i<=number; i++)
    {
        factorial *= i;
    }
    console.log(`The Factorial of ${number} is: ${factorial}`);
}
if (factorial>1000){
    console.log("wow, that's a big number!");
}
else if(factorial >100)
{
    console.log("Thats a moderately large factorial.");
}
else{
    console.log("thats  a small factorial");
}