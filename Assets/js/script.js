var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector(".question")
var optionsEl = document.querySelector(".options")



// Order:
// 1. Display the Rules of the game on load with the Start Button front & centre.
// 2. The Timer is displayed on the top right of the page.
// 3. Once the user presses the Start button, the rules disappear & the first Question (chosen randomly) appears with 4 answer Options & the Timer begins its countdown.
// 4. a) If the user chooses the correct option, they are given a message (word/color/sound) that they are correct.
//    b) If the user chooses a wrong option, they are given a message (word/color/sound) that they are incorrect & 10 seconds will be removed from the time remaining.
// 5. Then, the next Question (chosen randomly) appears with 4 answer Options & steps 4 & 5 are repeated.
// 6. a) The Game ends either when there are no questions remaining & the user is told his/her score & is asked if they would like to record their score on the high scores page.
//    b) Or the Game ends when the Timer reaches zero & the user is told they have failed/lost. 
// 7. Local storage will be needed to record the high scores on the high scores page & have them persist.








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