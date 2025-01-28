
function reverseNumber(number){
    let reversed=0;

    while(number>0)
    {
        let digit= number % 10;
        reversed= reversed * 10+ digit;

        number=Math.floor(number/10);
    }
    return reversed;
}

let num=1234;
console.log(`Reversed number: ${reverseNumber(num)}`);

//sum of odd and even number

let sumEven=0;
let sumOdd=0;

for(let i=0;i<=100; i++)
{
    if(i%2 === 0)
    {
        sumEven +=i;

    }else{
        sumOdd += i;
    }
}
console.log(`Sum of even numbers:${sumEven}`);
console.log(`Sum of odd numbers: ${sumOdd}`);

//factorial number

function factorial(number)
{
    let fact=1;
    let i=number;

    while(i>0)
    {
        fact *=i;
        i--;
    }
    return fact;
}

let numb=5;
console.log(`factorial of ${numb}is: ${factorial(numb)}`);