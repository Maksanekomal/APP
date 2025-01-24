//palindrom

function isPalindrome(str)
{
    str=str.replace(/\s+/g,'').toLowerCase();// \s is used to match any whitespace char,+= 1 or more element \s+=means match 1 or more char whitespace
    let reversedStr=str.split('').reverse().join('');// g=global flag

    if(str === reversedStr)
    {
        return true;
    }else{
        return false;
    }
}

let string= "a man a plan a canal panama";
if(isPalindrome(string))
{
    console.log(`"${string}" is a palindrome`);
}else{
    console.log(`"${string}" is not a palindrome`)
}