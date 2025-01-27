let length= 10;
let width = 5;

let perimeter = 2*(length + width);
let area= length+width;

console.log("Perimeter of the rectangle:"+ perimeter);
console.log("Area of rectangle:"+area);

if(perimeter>area)
{
    console.log("The perimeter is greater than area.");
}else if(perimeter<area)
{
    console.log("The preimeter is less than area.");
}else{
    console.log("The perimeter is equal to area.");
}