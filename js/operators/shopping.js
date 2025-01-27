let totalAmount=parseFloat(prompt("Enter total amount:"));

if(totalAmount>100){
    totalAmount=totalAmount*0.1;
}
console.log("Discount total:", totalAmount);