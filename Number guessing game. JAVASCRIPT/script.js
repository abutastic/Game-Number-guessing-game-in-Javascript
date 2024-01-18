// Number guessing game.

// Fetch the html elements
const myInput = document.getElementById("myInput");
const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const myResult = document.getElementById("myResult");

// Assign minimum and maximum values
const minNum = 1;
const maxNum = 100;

// Generating a random number
const answer = Math.floor(Math.random()* (maxNum - minNum + 1));

// uncomment below if you want to see the answer in console
// console.log(answer);

// Assign attempt and guess variables
let attempt = 0;
let guessNum;


// Button functionality
myButton.onclick = function(){
    guessNum = myInput.value;
    guessNum = Number(guessNum);

    if(isNaN(guessNum)){
        myLabel.textContent = `${guessNum}`;
        myResult.textContent = `${guessNum} is not a valid number`;
    }
    else if(guessNum < 1 || guessNum > 100){
        myLabel.textContent = `${guessNum}`;
        myResult.textContent = `${guessNum} is not a valid number`;
    }
    else{
        attempt++;
        if(guessNum < answer){
            myLabel.textContent = `${guessNum}`;
            myResult.textContent = `${guessNum} is TOO LOW!!`;
        }
        else if( guessNum > answer){
            myLabel.textContent = `${guessNum}`;
            myResult.textContent = `${guessNum} is TOO HIGH!!`;
        }
        else{
            myResult.textContent = `Congrats!! your Answer ${answer} is right. And YOU TOOK ${attempt} attempts!!`;
            console.log("YOU WON!!");
        }
    }

}