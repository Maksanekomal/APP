

//prime no is divisors of 1 and no. it self and cant be divide by any other no
//a

function isPrime(num)
{
    // check no. is less than 2(not prime)
    if(num <= 1)
    {
        return false;
    }
    // check divisibility from 2 to the sq root
    for(let i=2; i<=Math.sqrt(num);i++)
    {
        if(num % i === 0)
        {
            return false // no. is divisible by i not a prime 
        }
    }

  return true; //prime 

}  

let number = 20;
if(isPrime(number))
{
    console.log(`${number} is a prime number`);
}else{
    console.log(`${number} is not a  prime number`);
}



