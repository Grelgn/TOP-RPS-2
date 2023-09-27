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
    else {
        return `You Lost! ${cSelection} beats ${pSelection}`;
    }
}