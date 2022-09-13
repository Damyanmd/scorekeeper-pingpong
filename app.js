const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const display1Score = document.querySelector('#p1Score');
const display2Score = document.querySelector('#p2Score');
const selectBar = document.querySelector('#selectBar')

let score1Player = 0;
let score2Player = 0;
let winning = 3;
let gameOver = false;

selectBar.addEventListener('change', function () {
    winning = parseInt(this.value);
    reset()
});

p1Button.addEventListener('click', function () {
    if (score1Player !== winning && !gameOver) {
        score1Player += 1;
        display1Score.textContent = score1Player;
        if (score1Player === winning) {
            gameOver = true;
            display1Score.classList.add('has-text-success');
            display2Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true
        }
    }
})
p2Button.addEventListener('click', function () {
    if (score2Player !== winning && !gameOver) {
        score2Player += 1;
        display2Score.textContent = score2Player;
        if (score1Player === winning) {
            gameOver = true;
            display1Score.classList.add('has-text-danger');
            display2Score.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true
        }
    }
});

resetButton.addEventListener('click', reset);

function reset() {
    gameOver = false;
    score1Player = 0;
    score2Player = 0;
    display1Score.textContent = 0;
    display2Score.textContent = 0;
    display1Score.classList.remove('has-text-danger', 'has-text-success');
    display2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
};