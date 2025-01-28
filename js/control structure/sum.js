

function sumOfDigits(number)
{
    let sum=0;
    number=Math.abs(number);

    while(number>0)
    {
        let digit=number%10;
        sum += digit;
        number = Math.floor(number/10);

    }
    return sum;
}

let number=1234;
console.log(`the sum of the digits of ${number} is: ${sumOfDigits(number)}`);