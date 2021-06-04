console.log("connected");

const p1o = {
    score:0 ,
    button: document.querySelector("#p1b"),
    display: document.querySelector("#p1")
};
const p2o = {
    score:0 ,
    button: document.querySelector("#p2b"),
    display: document.querySelector("#p2")
};
const rb = document.querySelector("#r");
const ws = document.querySelector('#wss');

let winnings;
let gameOver;
reset()


function upadte(current, oponent){
    if (!gameOver) {
        current.score += 1;
        if (current.score === winnings) {
            gameOver = true;
            current.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            current.button.disabled = true;
            oponent.button.disabled = true;
        }
        current.display.textContent = current.score;
    }
    
    
}
function reset(num = ws.value) {
    p1o.score = 0;
    p1o.display.textContent = p1o.score;
    p1o.display.classList.remove('has-text-success', 'has-text-danger');
    p1o.button.disabled = false;
    
    p2o.score = 0;
    p2o.display.textContent = p2o.score;
    p2o.display.classList.remove('has-text-success', 'has-text-danger');
    p2o.button.disabled = false;

    gameOver = false;
    winnings = parseInt(num);
}



p1o.button.addEventListener("click", () => {
    upadte(p1o,p2o);
});

p2o.button.addEventListener("click", () => {
    upadte(p2o,p1o);
});

rb.addEventListener("click", () => {
    reset();
});
ws.addEventListener('change', function () {
    reset();
});


