//vowels

function countVowelsAndConsonants(string)
{
    const vowels= "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount=0;
    for(let char of string)
    {
        if(vowels.includes(char))
        {
            vowelCount++;
        }else if(char.toLowerCase()>='a' && char.toLowerCase()<='z')
        {
            consonantCount++;
        }
    }
    return{vowelCount, consonantCount};
}

const inputString="Hare Krishnaa!";
const result=countVowelsAndConsonants(inputString);

console.log(`Vowels:${result.vowelCount}`);
console.log(`Consonants:${result.vowelCount}`);
