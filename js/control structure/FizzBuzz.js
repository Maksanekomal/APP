

for(let i=1;i<=50;i++)
{
    if(i%3 === 0 && i%5 === 0)
    {
        console.log("FizzBuzz");
    }else if(i%3 === 0)
    {
        console.log("Fizz");
    }else if(i%5 === 0)
    {
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//prime no

function isPrime(number)
{
    if(number <2)return false;
    for(let i=2;i<=Math.sqrt(number); i++)
    {
        if(number % i === 0)
        {
            return false;
        }
    }
    return true;
}

let number=parseInt(prompt("Enter a number:"));
if(isPrime(number)){
    console.log(`${number}is a prime number.`);
}else{
    console.log(`${number} is not a prime number.`);
}



