var timeEl = document.querySelector(".timer-box");
var startBtn = document.getElementById("start-button");
var questionEl = document.querySelector(".question");
var rulesCardEl = document.querySelector(".rules-card");
var questionsCardEl = document.querySelector(".questions-card");
var choiceResponseEl = document.querySelector("#response");

var optionOneEl = document.querySelector(".options-button-one");
var optionTwoEl = document.querySelector(".options-button-two");
var optionThreeEl = document.querySelector(".options-button-three");
var optionFourEl = document.querySelector(".options-button-four");


// TODO:
// working - 1. Display the Rules of the game on load with the Start Button front & centre.
// working - 2. The Timer - with a start time of 75 seconds - is displayed on the top right of the page.
// working - 3. Once the user presses the Start button, the rules disappear & the first Question (chosen randomly) appears with 4 answer Options & the Timer begins its countdown.
// working - 4. a) If the user chooses the correct option, they are given a written message to say that they are correct.
// working - 4. b) If the user chooses a wrong option, they are given a written message to say that they are incorrect.
// working - 4. c) If the choice is incorrect, 10 seconds will be removed from the time remaining.
// working - 5. Then, the next Question (chosen randomly) appears with 4 answer Options & steps 4 & 5 are repeated.
// 6. a) The Game ends either when there are no questions remaining & the user is told his/her score & is asked if they would like to record their score on the high scores page.
// working - 6. b) Or the Game ends when the Timer reaches zero & the user is told they have failed/lost/time is up. 

// 7. a) Local storage will be needed to record the high scores on the high scores page & have them persist.
// 7. b) Winner types initials/name & presses Enter button
// 7. c) Winner's initials/name is "setItem" into local storage as a string
// 7. d) Winner's score is captured from end of game
// 7. e) Winner's score is "setItem" into local storage as a string
// 7. f) Winner is declared as an object

// TODO: Remove console logs


var quizQuestions = [{
        question: "Arrays in JavaScript can be used to store?",
        option1: "Numbers & Strings",
        option2: "Booleans",
        option3: "Other arrays",
        option4: "All of the above",
        correctAnswer: 4
    },
    {
        question: "Commonly used data types DO NOT include?",
        option1: "Strings",
        option2: "Booleans",
        option3: "Alerts",
        option4: "Numbers",
        correctAnswer: 3
    },
    {
        question: "String values must be enclosed in?",
        option1: "Single or double quotation marks",
        option2: "Curly brackets",
        option3: "Parenthesis",
        option4: "Square brackets",
        correctAnswer: 1
    },
    {
        question: "Which of the following methods removes the last element from an array and returns that element?",
        option1: "get()",
        option2: "last()",
        option3: "pop()",
        option4: "None of the above",
        correctAnswer: 3
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        option1: "*",
        option2: "X",
        option3: "==",
        option4: "=",
        correctAnswer: 4
    },
    {
        question: "Which of these is NOT a JavaScript comparison operator?",
        option1: "===",
        option2: "==!",
        option3: ">=",
        option4: "?",
        correctAnswer: 2
    },
    {
        question: "JavaScript uses the + operator for both addition and concatenation.  Which of the following statements is TRUE?",
        option1: "Numbers are concatenated. Strings are added.",
        option2: "Numbers are added. Strings are concatenated.",
        option3: "Both Numbers and Strings can be concatenated.",
        option4: "Both Numbers and Strings can be added.",
        correctAnswer: 2
    },
    {
        question: "Is the console a useful tool used in debugging of JavaScript?",
        option1: "Yes, always",
        option2: "More often than not",
        option3: "Rarely",
        option4: "Never",
        correctAnswer: 1
    },
    {
        question: "Which of the following String functions creates a string and displays it in a large font as if it were in a tag?",
        option1: "anchor()",
        option2: "blink()",
        option3: "strong()",
        option4: "big()",
        correctAnswer: 4
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        option1: "if (i==5)",
        option2: "if i=5 then",
        option3: "if i==5 then",
        option4: "if i=5",
        correctAnswer: 1
    }
];


var time = 75;
var interval = null;

var startTimer = function () {
    interval = setInterval(function () {
        if (time > 0) {
            time--;
            timeEl.textContent = time;
            console.log(time);
        } else if (time === 0) {
            loseGame();
            clearInterval(interval);
            timeEl.textContent = "Time's up!";
        }
    }, 1000);
    startQuiz();
};

var shuffledQuestions;
var currentQuestion;
var currentCorrectAnswer;
var currentQuestionIndex;
var index = 0;
var response;

function startQuiz() {
    rulesCardEl.classList.add("hide");
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionsCardEl.classList.remove("hide");
    setNextQuestion();
};

function setNextQuestion() {
    choiceResponseEl.classList.add("hide");
    console.log(shuffledQuestions);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(quizQuestions) {
    questionEl.innerText = quizQuestions.question;

    optionOneEl.innerText = quizQuestions.option1;
    optionTwoEl.innerText = quizQuestions.option2;
    optionThreeEl.innerText = quizQuestions.option3;
    optionFourEl.innerText = quizQuestions.option4;

    optionOneEl.dataset.correct = quizQuestions.correctAnswer;
    optionTwoEl.dataset.correct = quizQuestions.correctAnswer;
    optionThreeEl.dataset.correct = quizQuestions.correctAnswer;
    optionFourEl.dataset.correct = quizQuestions.correctAnswer;

    if (quizQuestions.length === currentQuestionIndex) {
        winGame();
    } else {
        currentQuestionIndex++;
    };
    checkAnswer();
};

var optionsBtns = document.querySelectorAll("button.option");
var answer;
var userInput;

function checkAnswer(answer, userInput) {
    optionsBtns.forEach(function (i) {
        i.addEventListener('click', function (event) {
            console.log(i);
            userInput = Number(event.target.dataset.number);
            answer = Number(event.target.dataset.correct);
            console.log(userInput);
            console.log(answer);
            if (answer === userInput) {
                response = "Correct!";
                console.log("correct");
                choiceResponseEl.classList.remove("hide");
                choiceResponseEl.textContent = response;
                setTimeout(setNextQuestion, 500);
            } else {
                response = "Wrong!  You lose 10 seconds.";
                console.log("wrong");
                choiceResponseEl.classList.remove("hide");
                choiceResponseEl.textContent = response;
                subtractTime();
            };
        });
    });
};

function subtractTime() {
    if (time > 10) {
        time = time - 10;
        timeEl.textContent = time;
        console.log(time);
        console.log("minus 10 seconds");
        setTimeout(setNextQuestion, 500);
    } else if (time <= 10) {
        loseGame();
        clearInterval(interval);
        timeEl.textContent = "Time's up!";
    }
};

var winnerCardEl = document.querySelector(".winner-card");
var loserCardEl = document.querySelector(".loser-card");
var finalScoreEl = document.getElementById("final-score");
var clickHereEl = document.getElementById("click-here");
var winner;
var winningScore;

var loseGame = function () {
    questionsCardEl.classList.add("hide");
    loserCardEl.classList.remove("hide");
}

var finalScoreEl = document.querySelector("#final-score");

var winGame = function () {
    saveInterval(time);
    questionsCardEl.classList.add("hide");
    winnerCardEl.classList.remove("hide");
    // TO DO: capture the time/count & put into a var finalScoreEl
    // TO DO: ask the player to enter name/initials
};

// TODO: set the winner's name/initials into local storage
function setPreviousWinners() {
    winner.textContent = winnerInitials;
    localStorage.setItem("winner", winnerInitials);
};

// TODO: set the winner's score into local storage
function setPreviousScores() {
    time.textContent = finalScoreEl;
    localStorage.setItem("score", finalScoreEl);
};

// TODO: this code is to be put into the scripths.js file for load of scoresheet.html
// function getPreviousWinners() {
//     var storedPreviousWinners = localStorage.getItem("winner");
//     if (storedPreviousWinners === null) {
//         return;
//     } else {
//         winnerInitials = storedPreviousWinners;
//     };
//     winner.textContent = winnerInitials;
// };

// TODO: this code is to be put into the scripths.js file for load of scoresheet.html
// function getPreviousScores() {
//     var storedPreviousScores = localStorage.getItem("winningScore");
//     if (storedPreviousScores === null) {
//         return;
//     } else {
//         finalScoreEl = storedPreviousScores;
//     };
//     winningScore.textContent = finalScoreEl;
// };


function init() {
    startBtn.addEventListener("click", startTimer);
};

init();