let randomNumber=parseInt((Math.random()*100)+1);

const submit=document.querySelector('#sub');
const userinput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startOver=document.querySelector('.resultPress');
const lowOrHi=document.querySelector('.loworhi');

const p=document.createElement('p');
const previousGuesses=[];
let numGuesses= 1;
let palyGame=true;
// let restartBtn=$('#restart')
// restartBtn.hide()
if(palyGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        validateGuess(guess);
    });
        
    
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid');
    }else if(guess<1){
        alert('please enter number greater than 1')
    }else if(guess>100){
        alert('please enter a number less then 500');
       }else{

        previousGuesses.push(guess);


        if(numGuesses===11){
            displayGuesses(guess);
            displayGuesses(`game over number was ${randomNumber}`);
            endgame();
        }else{


            displayGuesses(guess);

            checkGuess(guess);
        }
       }
}

function checkGuess(guess){

    if(guess===randomNumber){
        displayMassage(`you guessed correctly!`);
        endgame();
    }else if(guess<randomNumber){
        displayMassage(`too low! try again`);
    }else if(guess>randomNumber){
        displayMassage(`too high ! try again`);

    }
}
function displayGuesses(guess){
   
    userinput.value='';
    guessSlot.innerHTML+=`${","+guess}`;
    numGuesses++
    remaining.innerHTML=`${11-numGuesses}`;

}
function displayMassage(message){
    lowOrHi.innerHTML=`<h1>${message}</h1>`;

}
function endgame(){

    userinput.value='';


    userinput.setAttribute('displayed','');

    p.classList.add('button');
    p.innerHTML=`<h1 id="newGame">Start new Game</h1>`
    startOver.appendChild(p);
    palyGame=false;
    
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber=parseInt((Math.random()*100)+1);
        previousGuesses=[]
        numGuesses=1
        guessSlot.innerHTML='';
        loworhi.innerHTML='';
        remaining.innerHTML=`${11-numGuesses}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
        palyGame=true;
    })
}

