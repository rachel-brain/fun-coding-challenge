var yourInitialsInput = document.querySelector("#your-initials");
var saveBtn = document.querySelector("#save");
var name;
var score;

var nameSavedSpan = document.querySelector("#winner-name");
var scoreSavedSpan = document.querySelector("#winner-score");



// renderLastRegistered();

// function renderLastRegistered() {
//     var nameInput = localStorage.getItem("name");
//     var highScore = localStorage.getItem("score");

//     if (!initials || !score) {
//         return;
//     }

//     winnerSavedSpan.textContent = initials;
//     scoreSavedSpan.textContent = score;
// }


// saveBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     localStorage.setItem("name", initials);
//     localStorage.setItem("score", score);
//     renderLastRegistered();
// });


var winnerEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


// for (var i = 0; i < listEl.length; i++) {
//     console.log("Here are the all the previous winners: " + zooAnimals[i] + ".");
// }



saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var winner = {
        name: name.value,
        score: score.value,
    };

    localStorage.setItem("winners", JSON.stringify(winner));
    renderMessage();

});

function renderMessage() {
    var previousWinners = JSON.parse(localStorage.getItem("winners"));
    if (previousWinners !== null) {
        document.querySelector(".message").textContent = previousWinners.name +
            " : " + previousWinners.score
    };
}