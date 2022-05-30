

function reset(){
    let paragraphs = document.querySelectorAll('.game_log p');
    for (let p of paragraphs){
        p.remove();
    }
    playerWins = 0;
    computerWins - 0;
}