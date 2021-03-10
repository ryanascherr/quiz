var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var introPage = document.querySelector("#intro-page");
var questionPage = document.querySelector("#question-page");
var scorePage = document.querySelector("#score-page");
var questionText = document.querySelector("#question-text");
var answerText = document.querySelectorAll(".answer-button");

var questions = ["Question 1:", "Question 2:", "Question 3:", "Question 4:", "Question 5:"]
var answers = {
    pageOne: ["Some text and stuffff!!!", "2", "3", "Again!"],
    pageTwo: ["4", "5", "6"],
    pageThree: ["7", "8", "9"],
    pageFour: ["10", "11", "12"],
    pageFive: ["13", "14", "15"]
  };

var secondsLeft = 60;
var pageNumber = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    pageNumber++;
    displayQuestionPage();
    startTimer();
}

function startTimer() {
    timerFunction = setInterval(function() {
        secondsLeft--;
        if (secondsLeft > 1) {
            document.getElementById("timer").innerHTML = secondsLeft + " seconds remaining";
        } else if (secondsLeft === 1) {
            document.getElementById("timer").innerHTML = secondsLeft + " second remaining";
        } else if (secondsLeft === 0) {
            document.getElementById("timer").setAttribute("class", "hidden");
        }
    }, 1000);
}

function displayIntroPage(){
    scorePage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    introPage.setAttribute("class", "display");
}

function displayQuestionPage(){
    scorePage.setAttribute("class", "hidden");
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "display");
    questionText.innerHTML = questions[pageNumber-1];
    if (pageNumber === 1) {
        for (i = 0; i < 4; i++) {
        answerText[i].innerHTML = answers.pageOne[i];}
    } else if (pageNumber === 1) {
        for (i = 0; i < 4; i++) {
            answerText[i].innerHTML = answers.pageTwo[i];}
    }
}

function displayScorePage(){
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    scorePage.setAttribute("class", "display");
}