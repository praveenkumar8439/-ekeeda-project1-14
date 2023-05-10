const playbtn=document.querySelector('.intro button');
const introScreen=document.querySelector('.intro');
const match=document.querySelector('.match');
const hand=document.querySelector('.hand img')
let pScore=0;
let cScore=0;

playbtn.addEventListener('click',()=>{
    introScreen.classList.add('unactive')
    match.classList.add('active');
});

function playMatch(){
    const options=document.querySelectorAll('.option button');
    const computerOptions=['rock','paper','scissor'];
    const playerHand=document.querySelector('.player-hand');
    const computerHand=document.querySelector('.computer-hand')
    options.forEach(option=>{
        option.addEventListener('click',function(){
            const computerNumber =Math.floor(Math.random()*3); 
            const computerChoice = computerOptions[computerNumber];

            // computerHand
            computerHands(this.textContent,computerChoice);

            playerHand.src =`./assets/${this.textContent}.png`;
            computerHand.src=`./assets/${computerChoice}.png`;

            playerHand.style.animation='shakePlayer 2s ease';
            computerHand.style.animation='shakecomputer 2s ease';
            
            
        })
    })
    hand.forEach(hand=>{
        hand.addEventListener('animationend',function(){
            this.style.animation="";
        })
    })
    // console.log(computerNumber)
}
playMatch();
function updatescore(){
    const playerScore=document.querySelector('.play-score p');
    const computerScore=document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
}
// console.log(computerHands());
function computerHands(playerChoice,computerChoice){
    
    const winner=document.querySelector('.winner')
    if(playerChoice===computerChoice){
        winner.textContent='it is tie';
        return;
    }
    if(playerChoice==='rock'){
        if(computerChoice==='scissor'){
            winner.textContent='player wins';
            pScore++;
            updatescore();
           return;
        }
        else{
            winner.textContent='computer wins';
            cScore++;
            updatescore();
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerChoice==='scissor'){
            winner.textContent='player wins';
            cScore++;
            updatescore();
           return;
        }
        else{
            winner.textContent='player wins';
            pScore++;
            updatescore();
            return;
        }
    }
    if(playerChoice==='scissor'){
        if(computerChoice==='rock'){
            winner.textContent='player wins';
            pScore++;
            updatescore();
           return;
        }
        else{
            winner.textContent='computer wins';
            cScore++;
            updatescore();
            return;
        }
    }
}
