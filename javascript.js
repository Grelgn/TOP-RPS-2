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
    if ((pSelection == 'Rock' && cSelection == 'Scissors') || (pSelection == 'Paper' && cSelection == 'Rock') || (pSelection == 'Scissors' && cSelection == 'Paper')) {
        return `You Won! ${pSelection} beats ${cSelection}`;
    }
    else if (pSelection == cSelection) {
        return `You Tied! ${pSelection} ties with ${cSelection}`;
    }
    else if ((pSelection == 'Rock' && cSelection == 'Paper') || (pSelection == 'Paper' && cSelection == 'Scissors') || (pSelection == 'Scissors' && cSelection == 'Rock')) {
        return `You Lost! ${cSelection} beats ${pSelection}`;
    }
}

function game() {
    let winCount = 0;
    let tieCount = 0;
    let loseCount = 0;

    const options = document.querySelectorAll('button');
    options.forEach(option => {
        option.addEventListener('click',() => {
            let pSelection = option.textContent;

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
    
            const roundResult = document.querySelector(".roundResult");
            roundResult.textContent = result;

            const score = document.querySelector(".score");
            score.textContent = `Wins: ${winCount} Ties: ${tieCount} Losses: ${loseCount}`;

            const gameResult = document.querySelector(".gameResult");
            if (winCount == 5) {
                gameResult.textContent = 'YOU WON THE GAME!'
                options.forEach(option => {
                    option.disabled = true;
                });
            }
            else if (loseCount == 5) {
                gameResult.textContent = 'YOU LOST THE GAME!'
                options.forEach(option => {
                    option.disabled = true;
                });
            }
        });
    });
}

game();