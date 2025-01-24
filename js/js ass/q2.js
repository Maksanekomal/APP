
//q2
const max=10;

const randomNumber = Math.floor(Math.random()*10)+1;  //math.floor is downs to nearest integer,range of zero to 9
console.log(randomNumber);

//q2. b

let userGuess = 0;

while(userGuess !== randomNumber)
{
    userGuess=parseInt(promt("guess a number between t to 10:")) //parseInt is a builtfun which convert string to int
    if(userGuess === randomNumber)
    {
        alert("COngratulation! You guessed it right.");
    }
    else{
        alert("wrong guess. Try again");
    }
}

