const workMinutesInput = document.getElementById("workMinutes");
const workSecondesInput = document.getElementById("workSecondes");
const pauseMinutesInput = document.getElementById("pauseMinutes");
const pauseSecondesInput = document.getElementById("pauseSecondes");
const valider = document.getElementById("valider");


function intToMinutes(num) {
    return String(Math.floor(num / 60)).padStart(2, "0")
}

function intToSecondes(num) {
    const minutes = String(Math.floor(num / 60)).padStart(2, "0");

    return String(num - (minutes * 60)).padStart(2, "0");
}

// transforme n'importe quelle valeur entrée par l'utilisateur
// en nombre entier supérieur ou égal à 0
function numberify(num, isSeconde=false) {
    let correctNum = num;

    if (!correctNum) correctNum = 0;
    if (typeof correctNum !== "number") correctNum = parseInt(correctNum);
    if (isNaN(correctNum)) correctNum = 0;

    correctNum = Math.max(correctNum, 0);
    if (isSeconde) correctNum = Math.min(correctNum, 59);

    return correctNum;
}


workMinutesInput.value = intToMinutes(numberify(localStorage.workTime));
workSecondesInput.value = intToSecondes(numberify(localStorage.workTime));
pauseMinutesInput.value = intToMinutes(numberify(localStorage.pauseTime));
pauseSecondesInput.value = intToSecondes(numberify(localStorage.pauseTime));

valider.addEventListener("click", () => {
    const workMinutes = numberify(workMinutesInput.value);
    const workSecondes = numberify(workSecondesInput.value, true);
    const pauseMinutes = numberify(pauseMinutesInput.value);
    const pauseSecondes = numberify(pauseSecondesInput.value, true);

    localStorage.workTime = workMinutes * 60 + workSecondes;
    localStorage.pauseTime = pauseMinutes * 60 + pauseSecondes;
});