//import{ getRandom } from "./index2"
//import { reset } from "./index3"


let computerStep;
let round = 1;
let computerWins = 0;
let playerWins = 0;


function theGame(step) {
    let rand = Math.floor(1+ Math.random() * 3);
    switch(rand) {
        case 1:
            computerStep = 'SCISSORS';
            break;
        case 2:
            computerStep = 'ROCK';
            break;
        case 3:
            computerStep = 'PAPER';
            break;    
    }

    if(step=='ROCK'){
        let p = document.createElement('p');
        switch (computerStep) {
            case 'SCISSORS':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You've WON!`;
                document.querySelector('.game_log').append(p);
                round++;
                playerWins++;
                break;
            case 'ROCK':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.DRAW!`;
                document.querySelector('.game_log').append(p);
                break;
            case 'PAPER':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You\'ve LOST!`;
                document.querySelector('.game_log').append(p);
                round++;
                computerWins++;
                break;
        }
    }

    if(step=='PAPER'){
        let p = document.createElement('p');
        switch (computerStep) {
            case 'SCISSORS':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You've LOST!`;
                document.querySelector('.game_log').append(p);
                round++;
                computerWins++;
                break;
            case 'ROCK':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You've WON!`;
                document.querySelector('.game_log').append(p);
                round++;
                playerWins++;
                break;
            case 'PAPER':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.DRAW!`;
                document.querySelector('.game_log').append(p);
                break;
        }
    }

    if(step=='SCISSORS'){
        let p = document.createElement('p');
        switch (computerStep) {
            case 'SCISSORS':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.'DRAW!`;
                document.querySelector('.game_log').append(p);
                break;
            case 'ROCK':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You've LOST!`;
                document.querySelector('.game_log').append(p);
                round++;
                computerWins++;
                break;
            case 'PAPER':
                p.innerHTML = `Round ${round}, ${step} vs. ${computerStep}.You've WON!`;
                document.querySelector('.game_log').append(p);
                round++;
                playerWins++;
                break;
        }
    }
    if(playerWins === 3) {
        alert('Congratulations! You are WINNER');
        reset();
    }
    
    if(computerWins === 3) {
        alert('Oh Noooo! You are LOSER');
        reset();
    }    
}
function reset(){
    let paragraphs = document.querySelectorAll('.game_log p');
    for (let p of paragraphs){
        p.remove();
    }
    playerWins = 0;
    computerWins = 0;
}