function counterVowels(str){
    let count=0;
    let vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(counterVowels("Hello, World"));

//palindrome

function isPalindrome(str){
    let reversed="";
    for(let i=str.length-1; i>=0;i--){
        reversed += str[i];

    }
    return str=== reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

//1 word of sent
function getFirstWord(sentence){
    let firstWord="";
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]=== " ")break;
        firstWord += sentence[i];
    }
    return firstWord;
}
console.log(getFirstWord("Hello, World"));

//replace
function replaceSpaces(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i] ==="" ? "-": str[i];
    }
    return result;
}
console.log(replaceSpaces("Hello World from JavaScript"));

//split

function splitInWords(sentence){
    let words=[];
    let currentWord="";
    for(let i=0;i<sentence.length; i++){
        if(sentence[i] === ""){
            words.push(currentWord);
            currentWord="";
        }else{
            currentWord += sentence[i];
        }
    }
    if(currentWord) words.push(currentWord);
    return words;
}
console.log(splitInWords("This is javascript"));

//capitale

function capitalizeWords(str){
    let result="";
    let capitalizeNext= true;

    for(let i=0; i<str.length;i++)
    {
        if(str[i] === " "){
            result +="";
            capitalizeNext = true;
        }else if(capitalizeNext){
            result =+str[i].toUpperCase();
            capitalizeNext=false;
        }else{
            result += str[i];
        }
    }
    return result;

}

console.log(capitalizeWords("hello worls from js"));

//reverse string

 function reverseString(str){
    let reversed= "";
    for(let i=str.length-1; i>=0;i--){
        reversed += str[i];
    }
    return reversed;
 }
 console.log(reverseString("JavaScript"));

 //count

 function countCharacter(str,char){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            count++;
        }
    }
    return count;
 }
 console.log(countCharacter("hello world","o"))

 //remove char

 function removeNonAlphanumeric(str){
    let result = "";
    for(let i=0; i<str.length;i++){
        if((str[i]>="a" && str[i]<="z") || (str[i] >= "A" && str[i]<= "Z") || (str[i] >="0" && str[i] <="9")){
            result += str[i];
        }
    }
    return result;

 }
 console.log(removeNonAlphanumeric("Hello, world 123."))

 function startsAndEndsSame(str){
    if(str.length === 0) return false;
    return str[0] === str[str.length - 1];
 }
 console.log(startsAndEndsSame("radar"));
 console.log(startsAndEndsSame("hello"));