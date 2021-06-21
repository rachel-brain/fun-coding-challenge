var rootEl = document.querySelector("#root");
var initials = document.querySelector("#your-initials");
var score = document.querySelector("#final-score"); // already defined in script.js!
var enterBtn = document.querySelector("#enter");


// TODO:
// 1. On load, Winner object/s (saved winners names/initials & scores) are "getItem" from local storage, parsed as an array
// 2. Winner objects are added onto the scoreboard as list items
// 3. Winner objects as <li> are rendered on the scoresheet.html & are sorted from highest to lowest score


// TODO: rework & complete
// var winner = {};
// var winnerList = document.querySelector("#winner-list");

// enterBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     winner = {
//         initials: initials.value,
//         score: score.value,
//     };

//     localStorage.setItem("winner", JSON.stringify(winner));
//     console.log(winner);
//     renderWinner();
// });

// function renderWinner() {
//     var lastWinner = JSON.parse(localStorage.getItem("winner"));

//     if (lastWinner !== null) {
//         document.querySelector(".message").textContent = lastWinner.initials +
//             ": " + lastWinner.score;
//     } else {
//         return;
//     };
// }

// var listEl = document.createElement("li");

// function renderWinnersList() {

//     for (var i = 0; i < listEl.length; i++) {
//         var winnerList = listEl[i];
//         console.log("Here are the all the previous winners: " + listEl[i]);

//         var li = document.createElement("li");
//         li.textContent = winnerList;
//         li.setAttribute("data-index", i);

//         winnerList.appendChild(li);
//     };
// }

// function initialise() {
//     var storedWinnerList = JSON.parse(localStorage.getItem("listEl"));

//     if (storedWinnerList !== null) {
//         listEl = storedWinnerList;
//     }
//     renderWinnersList();
// }

// function storeWinnerList() {
//     localStorage.setItem("listEl", JSON.stringify(ListEl));
// }


// TODO: rework & complete
// function renderWinnersList() {
//     var previousWinners = JSON.parse(localStorage.getItem("winners"));
//     if (previousWinners !== null) {
//         document.querySelector(".message").textContent = previousWinners.name +
//             " : " + previousWinners.score
//     };
// }

// TODO: rework & complete
// todoForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     var todoText = todoInput.value.trim();

//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//         return;
//     }

//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
// });

// TODO: rework & complete
// Add click event to todoList element
// todoList.addEventListener("click", function (event) {
//     var element = event.target;

// Checks if element is a button
//     if (element.matches("button") === true) {
//         // Get its data-index value and remove the todo element from the list
//         var index = element.parentElement.getAttribute("data-index");
//         todos.splice(index, 1);

//         // Store updated todos in localStorage, re-render the list
//         storeTodos();
//         renderTodos();
//     }
// });

// Calls initialize to retrieve data and render it to the page on load
function initialise() {
    getPreviousWinners();
    getPreviousScores();
};

initialise();