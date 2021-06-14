var timeEl = document.querySelector(".timer-box");
var startBtn = document.getElementById("start-button");
// var subtractTime= document.querySelector("subtract-time");
var questionEl = document.querySelector(".question");
var optionsBtns = document.querySelector(".options-button");
var rulesCardEl = document.querySelector(".rules-card");
var questionsCardEl = document.querySelector(".questions-card");
var choiceResponseEl = document.querySelector("#response");


// Order:
// 1. Display the Rules of the game on load with the Start Button front & centre.
// 2. The Timer - with a start time of 75 seconds - is displayed on the top right of the page.
// 3. Once the user presses the Start button, the rules disappear & the first Question (chosen randomly) appears with 4 answer Options & the Timer begins its countdown.
// 4. a) If the user chooses the correct option, they are given a message (word/color/sound) that they are correct.
//    b) If the user chooses a wrong option, they are given a message (word/color/sound) that they are incorrect & 10 seconds will be removed from the time remaining.
// 5. Then, the next Question (chosen randomly) appears with 4 answer Options & steps 4 & 5 are repeated.
// 6. a) The Game ends either when there are no questions remaining & the user is told his/her score & is asked if they would like to record their score on the high scores page.
//    b) Or the Game ends when the Timer reaches zero & the user is told they have failed/lost/time is up. 
// 7. Local storage will be needed to record the high scores on the high scores page & have them persist.

// RESET TIMER TO 75 SECONDS!!!!!


var time = 4;
var interval = null;

var startTimer = function () {
    interval = setInterval(function () {
        if (time > 0) {
            time--;
            timeEl.textContent = time;
            console.log(time);
        } else if (time === 0) {
            // loseGame();
            clearInterval(interval);
            console.log("Time's up!");
            timeEl.textContent = "Time's up!";
        }
    }, 1000);
    startQuiz();
};


var quizQuestions;

// var question;
// var options;// var correctAnswer;

// var optionsSplit = quizQuestions.options.split(",");

var optionsBtnOne = document.querySelector(".one");
var optionsBtnTwo = document.querySelector(".two");
var optionsBtnThree = document.querySelector(".three");
var optionsBtnFour = document.querySelector(".four");


var shuffledQuestions;
var currentQuestionIndex;
var response;

function startQuiz() {
    rulesCardEl.classList.add("hide");
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionsCardEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(quizQuestions) {
    questionEl.innerText = quizQuestions.question;
    quizQuestions.options.forEach(answer => {
        // optionsBtns[0].innerText = quizQuestions.options[0];
        // optionsBtns[1].innerText = quizQuestions.options[1];
        // optionsBtns[2].innerText = quizQuestions.options[2];
        // optionsBtns[3].innerText = quizQuestions.options[3];
        // optionsBtns.one = quizQuestions.options[0].text;
        // optionsBtns.two = quizQuestions.options[1].text;
        // optionsBtns.three = quizQuestions.options[2].text;
        // optionsBtns.four = quizQuestions.options[3].text;
        // optionsBtns.innerText = quizQuestions.options.text;
        // optionsBtns.innerText = quizQuestions.options; THIS ONE COCATENATES OPTIONS
        optionsBtnsOne.innerText = quizQuestions.options[0];
        optionsBtnsTwo.innerText = quizQuestions.options[1];
        optionsBtnsThree.innerText = quizQuestions.options[2];
        optionsBtnsFour.innerText = quizQuestions.options[3];

        // optionsBtns.innerText = quizQuestions.optionsSplit;
        if (answer === quizQuestions.correctAnswer) {
            response = "Correct!";
            choiceResponseEl.textContent = response;
        } else {
            response = "Wrong!";
            choiceResponseEl.textContent = response;
        };
    });
};

optionsBtns.addEventListener("click", (event) => {
    event.preventDefault();
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    setNextQuestion();
});



// subtractTime.addEventListener("click", function () {
//   timer -= 10; // or
// timer = timer + 10;
// });


// var loseGame = function() {
// }



quizQuestions = [{
        question: "Arrays in JavaScript can be used to store?",
        options: ["Numbers & Strings", "Booleans", "Other arrays", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Commonly used data types DO NOT include?",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "String values must be enclosed in?",
        options: ["Single or double quotation marks", "Curly brackets", "Parenthesis", "Square brackets"],
        correctAnswer: "Single or double quotation marks"
    },
    {
        question: "Which of the following methods removes the last element from an array and returns that element?",
        options: ["get()", "last()", "pop()", "None of the above"],
        correctAnswer: "pop()"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "X", "==", "="],
        correctAnswer: "="
    },
    {
        question: "Which of these is NOT a JavaScript comparison operator?",
        options: ["===", "==!", ">=", "?"],
        correctAnswer: "==!"
    },
    {
        question: "JavaScript uses the + operator for both addition and concatenation.  Which of the following statements is TRUE?",
        options: ["Numbers are concatenated. Strings are added.", "Numbers are added. Strings are concatenated.", "Both Numbers and Strings can be concatenated.", "Both Numbers and Strings can be added."],
        correctAnswer: "Numbers are added. Strings are concatenated."
    },
    {
        question: "Is the console a useful tool used in debugging of JavaScript?",
        options: ["Yes, always", "More often than not", "Rarely", "Never"],
        correctAnswer: "Yes, always"
    },
    {
        question: "Which of the following String functions creates a string and displays it in a large font as if it were in a tag?",
        options: ["anchor()", "blink()", "strong()", "big()"],
        correctAnswer: "big()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: ["if (i==5)", "if i=5 then", "if i==5 then", "if i=5"],
        correctAnswer: "if (i==5)"
    }
];

var init = function () {
    startBtn.addEventListener("click", startTimer);
}

init();