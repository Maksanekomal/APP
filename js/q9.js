//factorial=suppose 5 then 5*4*3*2*1=120

function calculateFactorial(number)
{
    if(number<0)
    {
        return "Factorial is not defined for negative bumbers:"
    }
    let factorial=1;
    let i=number;
    while(i>0)
    {
        factorial *= i;
        i--;
    }
    return factorial;
}

const num=6;
console.log(`the factorial of ${num} is: ${calculateFactorial(num)}`);