console.log("connected");

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

p1but.addEventListener("click", () => {
    if (!gameOver) {
        p1s += 1;
        if (p1s === winnings) {
            gameOver = true;
        }
        p1ss.textContent = p1s;
    }
});

p2but.addEventListener("click", () => {
    if (!gameOver) {
        p2s += 1;
        if (p2s === winnings) {
            gameOver = true;
        }
        p2ss.textContent = p2s;
    }
});

rb.addEventListener("click", () => {
    p1s = 0;
    p2s = 0;
    p1ss.textContent = p1s;
    p2ss.textContent = p2s;
    gameOver = false;
});
ws.addEventListener('change',function(){
    winnings = parseInt(this.value);
    
});

