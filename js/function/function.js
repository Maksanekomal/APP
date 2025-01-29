

function factorial(n)
{
    if(n === 0 || n === 1)return 1;
    let result=1;
    for(let i=2;i<=n;i++){
        result *=i;
    }
     return result;
}
console.log("Factorial of 5:",factorial(5));

//evenodd

function isEven(num){
    return num%2 === 0 ? "Even": "Odd";
}
console.log("7 is:",isEven(7));
console.log("10 is:",isEven(10));

//reverse a string

function reverseString(str){
    let reversed=""; //emt string to store the reversed version
    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reverse of harekrishna:", reverseString("harekrishna"));

//largest of 3 number

function largestofThree(a,b,c)
{
    if(a>b && a>c) return a;
    if(b>a && b>c) return b;
    return c;

}
console.log("Largest of(10,20,30):",largestofThree(10,20,30));

//perimeter of rectangle

function rectangleProperties(length,width)
{
    const area=length*width;
    const perimeter=2*(length+width);

    return{area,perimeter};
}

const{area,perimeter}=rectangleProperties(8,6);
console.log("Area:",area);
console.log("Perimeter:",perimeter);

//leap year

function isLeapYear(year)
{
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    {
        return true;
    }
    return false;
}
console.log("2024 is leap year:", isLeapYear(2024));
console.log("2023 is leap year:", isLeapYear(2023));

//multiplication table

function multiplicationTable(num)
{
    for(let i=0;i<=10;i++)
    {
        console.log(`${num} x ${i}=${num*i}`);
    }
}
multiplicationTable(5);
