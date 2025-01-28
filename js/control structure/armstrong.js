let number=prompt("Enter a number to check if its an Armstrong number:");

number=parseInt(number);

let numStr=number.toString();
let numDigits=numStr.length;

let sum=0;

for(let i=0;i<numDigits; i++)
{
    let digitd=parseInt(numStr[i]);
    sum +=Math.pow(digit,numDigits);
}

if(sum === number)
{
    console.log(`${number} is a Armstrong  number.`);
}else{
    console.log(`${number} is not an Armstrong number.`);
}

//pyramid

let rows= prompt("Enter the number of rows for the pyramid:");
rows=parseInt(rows);

for(let i=1;i<=rows;i++)
{
    let spaces=' '.repeat(rows - i);

    let number='1'.repeat(2*i-1);

    console.log(spaces + number);
}