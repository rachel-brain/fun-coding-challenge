var yourNameInput = document.querySelector("#your-name");
var saveBtn = document.querySelector("#save");
var name;
var score;

var winnerSavedSpan = document.querySelector("#previous-winner");
var scoreSavedSpan = document.querySelector("#winner-score");





renderLastRegistered();

function renderLastRegistered() {
    var nameInput = localStorage.getItem("name");
    var highScore = localStorage.getItem("score");

    if (!initials || !score) {
        return;
    }

    winnerSavedSpan.textContent = initials;
    scoreSavedSpan.textContent = score;
}


saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.setItem("name", initials);
    localStorage.setItem("score", score);
    renderLastRegistered();
});