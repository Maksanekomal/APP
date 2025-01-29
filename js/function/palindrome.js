//palindrome

function isPalindrome(str){
    let reversed="";
    for(let i=str.length-1; i>=0; i--)
    {
        reversed += str[i];
    }
    return str=== reversed;
}

console.log("Is 'radar' a palindrome?", isPalindrome("radar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

//gcd

function gcd(a,b)
{
    while(b !== 0)
    {
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log("GCD of 56 and 98:", gcd(56,98));
console.log("GCD of 12 and 15:", gcd(12,15));