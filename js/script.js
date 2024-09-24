const instruction = document.getElementById("instruction");
const etat = document.getElementById("etat");
const timer = document.getElementById("timer");
const startTimer = document.getElementById("startTimer");


function intToTimer(num) {
    const minutes = String(Math.floor(num / 60)).padStart(2, "0");
    const secondes = String(num - (minutes * 60)).padStart(2, "0");

    return `${minutes}:${secondes}`;
}

/*
const workTime = 25 * 60;
const pauseTime = 5 * 60;
*/

const workTime = 10;
const pauseTime = 5;


timer.textContent = intToTimer(workTime);




let interval;


startTimer.addEventListener("click", () => {
    if (startTimer.textContent === "Commencer") {
        instruction.textContent = "Appuyez sur le bouton pour réinitialiser le timer";
        etat.textContent = "Travail";
        startTimer.textContent = "Réinitialiser";

        let i = workTime,
            working = true;

        interval = setInterval(() => {
            i--;

            if (working && i <= 0) {
                i = pauseTime;
                working = false;
                etat.textContent = "Pause";
            }

            if (!working && i <= 0) {
                i = workTime;
                working = true;
                etat.textContent = "Travail";
            }

            timer.textContent = intToTimer(i);
        }, 1000);
    } else {
        instruction.textContent = "Appuyez sur le bouton pour commencer le timer";
        etat.textContent = "Travail";
        startTimer.textContent = "Commencer";

        timer.textContent = intToTimer(workTime);

        if (interval) clearInterval(interval);
    }



});