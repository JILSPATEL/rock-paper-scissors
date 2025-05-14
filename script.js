let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if (!score){
    score={
        wins:0,
        losses:0,
        ties:0
    };
}*/

function playGame(playerMove) {
    const compMove = pickCompMove();

    let res = '';

    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            res = 'Tie';
        }
        else if (compMove === 'paper') {
            res = 'You Lose';
        }
        else if (compMove === 'scissors') {
            res = 'You Win';
        }
    }


    if (playerMove === 'paper') {
        if (compMove === 'rock') {
            res = 'You Win';
        }
        else if (compMove === 'paper') {
            res = 'Tie';
        }
        else if (compMove === 'scissors') {
            res = 'You Lose';
        }
    }

    if (playerMove === 'scissors') {
        if (compMove === 'rock') {
            res = 'You Lose';
        }
        else if (compMove === 'paper') {
            res = 'You Win';
        }
        else if (compMove === 'scissors') {
            res = 'Tie';
        }
    }

    if (res === 'You Win') {
        score.wins += 1;
    }
    else if (res === 'You Lose') {
        score.losses += 1;
    }
    else if (res === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = res;

    document.querySelector('.js-moves')
        .innerHTML = ` You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${compMove}-emoji.png" class="move-icon">
        Computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickCompMove() {
    const randNum = Math.random()

    let compMove = '';

    if (randNum >= 0 && randNum < 1 / 3) {
        compMove = 'rock';
    }
    else if (randNum >= 1 / 3 && randNum <= 2 / 3) {
        compMove = 'paper';
    }
    else if (randNum >= 2 / 3 && randNum < 1) {
        compMove = 'scissors';
    }
    let res = '';
    if (compMove === 'rock') {
        res = 'You Lose';
    }
    else if (compMove === 'paper') {
        res = 'You Win';
    }
    else if (compMove === 'scissors') {
        res = 'Tie';
    }
    return compMove;
}