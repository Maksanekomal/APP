let number= parseFloat(prompt("Enter  a number to generate its multiplication table:"));

if(isNaN(number))
{
    console.log("Invalid input. Please enter a valid number.");

}else{
    console.log("Multiplication table fot ${number}:");


for(let i=1;i<=10;i++)
{
    let result=number*i;
    console.log(`${number}x${i}=${result}`);
}
}