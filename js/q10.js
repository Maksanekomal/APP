//fibo

function generateFibonacci(n)
{
    if(n<=0) return[];
    if(n === 1) return[0]; //fisst term is 0

    const sequence =[0,1];

for(let i=2; i<n;i++)
{
    const nextTerm=sequence[i-1]+sequence[i-2];
    sequence.push(nextTerm);
}
return sequence;
}

const terms=10;
console.log(`Fibonacci sequence up to ${terms} terms:${generateFibonacci(terms).join(", ")}`);