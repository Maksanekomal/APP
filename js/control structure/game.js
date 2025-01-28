
const randomNumber= Math.floor(Math.random()*10)+1;

const userGuesses=[3,7,5,2,8];
let guessedCorrectly=false;
let attempt=0;

while(!guessedCorrectly)
{
    const guess=userGuesses[attempt];
    if(guess === randomNumber)
    {
        console.log(`Congratulations! You guessed the correct number:${randomNumber}`);
        guessedCorrectly=true;
    }else{
        console.log(`Wrong guess:${guess}. Try again!`);
    }

    attempt++;

    if(attempt>= userGuesses.length){
        console.
        log(`Out of guesses! The correct number was:${randomNumber}`);
        break;
    }

}