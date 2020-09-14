let submitButton = document.querySelector('.welcome-prompt').querySelector('button');
let winningPrompt = document.querySelector('.winning-prompt');

let XorO = 'X';
let XOList = [];
let playerName;

submitButton.addEventListener('click', () => {
    document.querySelector('.welcome-prompt').classList.toggle('hide');
    playerName = document.querySelectorAll('input');

    document.querySelector('#player-data').innerHTML = `<h3>Player1: ${playerName[0].value}</h3>
    <h3>player2: ${playerName[1].value}</h3>`;
});




let allBlocks = document.querySelector('#game-board').querySelectorAll('div');
for (let block of allBlocks) {
    block.addEventListener('click', () => {
        if (block.innerText === '') {
            block.innerText = XorO;
            if (XorO === 'X') {
                XorO = 'O';
            }
            else {
                XorO = 'X';
            }
        }
        XOList = [];
        for (let block of allBlocks) {
            XOList.push(block.innerText);
        }
        checkAnyWinner();
    })
}


function checkAnyWinner() {
    for (let i = 0; i <= 6; i += 3) {
        if ((XOList[i] !== '') && (XOList[i] === XOList[i + 1]) && (XOList[i] === XOList[i + 2])) {
            declareResult(XOList[i]);
        }
    }
    for (let i = 0; i < 3; i += 1) {
        if ((XOList[i] !== '') && (XOList[i] === XOList[i + 3]) && (XOList[i] === XOList[i + 6])) {
            declareResult(XOList[i]);
        }
    }
    if ((XOList[0] !== '') && (XOList[0] === XOList[4]) && (XOList[0] === XOList[8])) {
        declareResult(XOList[0]);
    }
    if ((XOList[2] !== '') && (XOList[2] === XOList[4]) && (XOList[2] === XOList[6])) {
        declareResult(XOList[2]);
    }

}

function declareResult(winner) {
    let winnerName;
    if (winner === 'X') {
        winnerName = playerName[0].value;
    }
    else {
        winnerName = playerName[1].value;
    }
    winningPrompt.querySelector('h2').innerText = "Winner is " + winnerName;
    winningPrompt.classList.remove('hide');
}

winningPrompt.querySelector('button').addEventListener('click', () => {
    winningPrompt.classList.add('hide');
    for (let block of allBlocks) {
        block.innerText = '';
    }
    XOList = [];
    XorO = 'X';
})

document.getElementById('reset-btton').addEventListener('click', () => {
    for (let block of allBlocks) {
        block.innerText = '';
    }
    XOList = [];
    XorO = 'X';
})