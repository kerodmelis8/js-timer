const display = document.getElementById("display");
let timer = null;
let startTimer = 0;
let elapsedTimer = 0;
let isRunning = false;

function start(){
    if(!isRunning){
       startTimer = Date.now() - elapsedTimer;
       timer = setInterval(update, 10);
    }
}
function stop(){
    
    if(isRunning){
        startTimer = Date.now() - elapsedTimer;
        timer = selection(update, 10);
        isRunning = true;
    }
}
function reset(){
    clearInterval(timer);
    startTimer = 0;
    elapsedTimer = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currentTime = Date.now();
    elapsedTimer = currentTime - startTimer;
    let hours = Math.floor(elapsedTimer / (1000 * 60));
    let minutes = Math.floor(elapsedTimer / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTimer / 1000 % 60);
    let millseconds = Math.floor(elapsedTimer % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    millseconds = String(millseconds).padStart(2, "0");




    display.textContent = `${hours}:${minutes}:${seconds}:${millseconds}`;
}