# 04 Web APIs: Fun Coding Quiz
BOOTCAMP - Week 4 assignment


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Instructions for the Quiz

1. Display the Rules of the game on load with the START Button front & centre.
2. The Timer - with a start time of 75 seconds - is displayed on the top right of the page.
3. Once the user presses the Start button, the rules disappear & the first Question (chosen randomly) appears with 4 answer Options & the Timer begins its countdown.
4. a) If the user chooses the correct option, they are given a written message that the chosen answer was correct.
   b) If the user chooses a wrong option, they are given a written message that the chosen answer was incorrect & 10 seconds will be deducted from the time remaining.
5. Then, the next Question (chosen randomly) appears with 4 answer Options & steps 4 & 5 are repeated.
6. a) The Game ends either when there are no questions remaining & the user is told his/her final score & is asked if they would like to record their score on the high scores page.
   b) Or the Game ends when the Timer reaches zero & the user is told they have failed/lost/time is up.
7. Local storage will be used to record the high scores which will persist & then be loaded onto the high scores/winners page when that page is opened.

## Description
My motivation for undertaking this project was to practise using vanilla javascript in the building of a multiple choice quiz.  It required the use of many functions plus local storage in a logical step-by-step process to achieve the end point of a player being able to "win" & to record their high score at the end of the game.

## Installation
Open the (index.html) page in your prefered browser to see the rules page of the game & press the START butoon when ready to play.

## Mock-Up

The following animation demonstrates the desired application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./assets/04-web-apis-homework-demo.gif)

### Screenshot

A screenshot of the webpage on a desktop monitor can be seen in the assets at (.assets/images/screenshot-of-deployed-quiz-website.JPG).

## License
The MIT License has been applied which can be seen in the source file at (LICENSE.txt).

## Tests
The main test run was to play the game to ensure that all all criteria were met; for example:
 * the questions were random
 * all 10 questions were presented
 * the timer was working correctly
 * the high score could be recorded
 * the high scores page would load with stored winners'initials/names & scores
 
 Unfortunately, at the time of publishing, the game/local storage was not working correctly for all criteria & further debugging is required.  In particular, the ......

### URLs

* The URLs of the functional, deployed applications:

   https://rachel-brain.github.io/fun-coding-challenge/

   https://rachel-brain.github.io/fun-coding-challenge/scoresheet.html

* The URL of the GitHub repository:

   https://github.com/rachel-brain/fun-coding-challenge
