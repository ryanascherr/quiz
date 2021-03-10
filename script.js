var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var pageTwo = document.querySelector("#whole-page-two");
var questionText = document.querySelector(".question-page-two");

var questions = ["Question 1:", "Question 2:", "Question 3:", "Question 4:", "Question 5:"]
var answersOne = [];
var answersTwo = [];
var answersThree = [];
var answersFour = [];
var answersFive = [];

var secondsLeft = 60;
var page = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    hideMainPage();
    startTimer();
    page++;
    displayPageOne();
}

function hideMainPage() {
    document.getElementsByTagName("header")[0].setAttribute("class", "hidden");
    document.getElementsByTagName("button")[0].setAttribute("class", "hidden");
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

function displayPageOne() {
    pageTwo.setAttribute("class", "display");
    questionText.innerHTML = questions[page-1];
}