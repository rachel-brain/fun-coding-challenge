var rootEl = document.querySelector("#root");
var initials = document.querySelector("#your-initials");
var score = document.querySelector("#final-score"); // already defined in script.js!
var enterBtn = document.querySelector("#enter");

// var nameSavedSpan = document.querySelector("#winner-name");
// var scoreSavedSpan = document.querySelector("#winner-score");

//     winnerSavedSpan.textContent = initials;
//     scoreSavedSpan.textContent = score;


// Order:
// 1. Winner types initials/name & presses Enter button
// 2. Winner's initials/name is "setItem" into local storage as a string
// 3. Winner's score is captured from end of game
// 4. Winner's score is "setItem" into local storage as a string
// 5. Winner is declared as an object
// 6. Winner object/s are "getItem" from local storage, parsed as an array
// 7. Winner objects are added onto the scoreboard as list items
// 8. Winner objects as <li> are sorted from highest to lowest score

var winner = {};
var winnerList = document.querySelector("#winner-list");

enterBtn.addEventListener("click", function (event) {
    event.preventDefault();

    winner = {
        initials: initials.value,
        score: score.value,
    };

    localStorage.setItem("winner", JSON.stringify(winner));
    console.log(winner);
    renderWinner();
});

function renderWinner() {
    var lastWinner = JSON.parse(localStorage.getItem("winner"));

    if (lastWinner !== null) {
        document.querySelector(".message").textContent = lastWinner.initials +
            ": " + lastWinner.score;
    } else {
        return;
    };
}

var listEl = document.createElement("li");

function renderWinnersList() {

    //     winner.initials.innerHTML = "";
    //     winner.score.innerHTML = " ";

    for (var i = 0; i < listEl.length; i++) {
        var winnerList = listEl[i];
        console.log("Here are the all the previous winners: " + listEl[i]);

        var li = document.createElement("li");
        li.textContent = winnerList;
        li.setAttribute("data-index", i);

        winnerList.appendChild(li);
    };
}

function init() {
    var storedWinnerList = JSON.parse(localStorage.getItem("listEl"));

    if (storedWinnerList !== null) {
        listEl = storedWinnerList;
    }
    renderWinnersList();
}

function storeWinnerList() {
    localStorage.setItem("listEl", JSON.stringify(ListEl));
}


// NEED TO PULL WHAT IS IN LOCAL STORAGE BEFORE YOU ADD THE NEW NAME & SCORE


// function renderWinnersList() {
//     var previousWinners = JSON.parse(localStorage.getItem("winners"));
//     if (previousWinners !== null) {
//         document.querySelector(".message").textContent = previousWinners.name +
//             " : " + previousWinners.score
//     };
// }

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var todoText = todoInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.value = "";

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
});

// Add click event to todoList element
todoList.addEventListener("click", function (event) {
    var element = event.target;

    // Checks if element is a button
    if (element.matches("button") === true) {
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);

        // Store updated todos in localStorage, re-render the list
        storeTodos();
        renderTodos();
    }
});

// Calls init to retrieve data and render it to the page on load
init()