const etat = document.getElementById("etat");
const timer = document.getElementById("timer");
const startTimer = document.getElementById("startTimer");


// cette fonction convertit un nombre entier en chaîne de caractère au format mm:ss
function intToTimer(num) {
    const minutes = String(Math.floor(num / 60)).padStart(2, "0");
    const secondes = String(num - (minutes * 60)).padStart(2, "0");

    return `${minutes}:${secondes}`;
}

/*
const workTime = localStorage.workTime || 25 * 60;
const pauseTime = localStorage.pauseTime || 5 * 60;
*/

const workTime = localStorage.workTime || 10;
const pauseTime = localStorage.pauseTime || 5;


timer.textContent = intToTimer(workTime);


let started = false;
let interval;

// lorsque le bouton est cliqué, le timer est activé ou désactivé
startTimer.addEventListener("click", () => {
    if (!started) {
        started = true;

        etat.textContent = "Travail";
        startTimer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/></svg>`;

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
        started = false;

        etat.textContent = "Travail";
        startTimer.innerHTML = `<svg id="startTimer" class="startTimer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;

        timer.textContent = intToTimer(workTime);

        if (interval) clearInterval(interval);
    }
});