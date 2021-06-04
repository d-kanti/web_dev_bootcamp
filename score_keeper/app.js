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


const p1but = document.querySelector("#p1b");
const p2but = document.querySelector("#p2b");
const p1ss = document.querySelector("#p1");
const p2ss = document.querySelector("#p2");
const rb = document.querySelector("#r");
const ws = document.querySelector('#wss');



let p1s = 0;
let p2s = 0;
let winnings = parseInt(ws.value);
let gameOver = false;

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




p1but.addEventListener("click", () => {
    upadte(p1o,p2o);
});

p2but.addEventListener("click", () => {
    upadte(p2o,p1o);
});

rb.addEventListener("click", () => {
    reset();
});
ws.addEventListener('change', function () {
    // winnings = parseInt(this.value);
    reset();
});

function reset(num = ws.value) {
    
    p1o.score = 0;
    p2o.score = 0;
    p1o.display.textContent = p1o.score;
    p2o.display.textContent = p2o.score;
    gameOver = false;
    p1o.display.classList.remove('has-text-success', 'has-text-danger');
    p2o.display.classList.remove('has-text-success', 'has-text-danger');

    p1o.button.disabled = false;
    p2o.button.disabled = false;

    winnings = parseInt(num);

}

