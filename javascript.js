function getComputerChoice() {
    switch(Math.floor((Math.random() * 3))) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(pSelection, cSelection) {
    pSelection = pSelection[0].toUpperCase() + (pSelection.slice(1, pSelection.length)).toLowerCase();
    if ((pSelection == 'Rock' && cSelection == 'Scissors') || (pSelection == 'Paper' && cSelection == 'Rock') || (pSelection == 'Scissors' && cSelection == 'Paper')) {
        return `You Won! ${pSelection} beats ${cSelection}`;
    }
    else if (pSelection == cSelection) {
        return `You Tied! ${pSelection} ties with ${cSelection}`;
    }
    else if ((pSelection == 'Rock' && cSelection == 'Paper') || (pSelection == 'Paper' && cSelection == 'Scissors') || (pSelection == 'Scissors' && cSelection == 'Rock')) {
        return `You Lost! ${cSelection} beats ${pSelection}`;
    }
    else {
        return 'INVALID MOVE'
    }
}

function game() {
    let winCount = 0;
    let tieCount = 0;
    let loseCount = 0;
    while (1) {
        let pSelection = prompt("Choose between 'Rock', 'Paper, or 'Scissors'");
        let result = playRound(pSelection, getComputerChoice());
        if (result.slice(4,7) == 'Won') {
            winCount++;
        }
        else if (result.slice(4,8) == 'Tied') {
            tieCount++;
        }
        else if (result.slice(4,8) == 'Lost') {
            loseCount++;
        }
        
        console.log(result);
        console.log('Wins: ' + winCount);
        console.log('Ties: ' + tieCount);
        console.log('Losses: ' + loseCount);

        if (winCount == 5) {
            console.log('YOU WON THE GAME!')
            break;
        }
        else if (loseCount == 5) {
            console.log('YOU LOST THE GAME!')
            break;
        }
    }
}

console.log('ROCK PAPER SCISSORS GAME!');
console.log('FIRST TO WIN 5 ROUNDS WINS THE GAME!');
game();