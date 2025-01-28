//average of n number
let n=prompt("Enter the number of values:");

n=parseaint(n);

let totalSum=0;

for(let i=0; i<n; i++)
{
    let num=prompt(`Enter number ${i+1}:`);
    totalSum += parseFloat(num);
}

let average=totalSum/n;

console.log("The sum of the number is:", totalSum);
console.log("the average of the number is:", average);

//leap year

let year=prompt("Enter a year:");

year=parseInt(year);

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
    console.log(`${year} is  a leap year.`);

}else{
    console.log(`${year} is not a leap year.`);
}


//divisor

let number=prompt("Enter a number:");

number = parseInr(number);

console.log(`Divisors of ${number}:`);
for(let i=1; i<=number;i++)
{
    if(number % i === 0){
        console.log(i);
    }
}

//fibonacci

let N=prompt("Enter the number of terms for the  fibonacci sequence:");
n= parseInt(N);

let a=0 , b=1;

console.log(`Fibonacci sequence up to ${N}terms:`);

for(let i=1;i<=N;i++)
{
    console.log(a);
    let nextTerm= a+b;
    a=b;
    b=nextTerm;
}