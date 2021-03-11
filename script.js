var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var introPage = document.querySelector("#intro-page");
var questionPage = document.querySelector("#question-page");
var scorePage = document.querySelector("#score-page");
var questionText = document.querySelector("#question-text");
var clickable = document.querySelector(".clickable");
var answerText = document.querySelectorAll(".answer-button");

var questions = [
"Inside which HTML element do we put the JavaScript?",
'What is the correct JavaScript syntax to change the content of the following HTML element:', 
'How do you write "Hello World" in an alert box?', "How do you create a function in JavaScript?",
"How to write an IF statement in JavaScript?"
]

var answers = {
    pageOne: ["1: <script>", "2: <JS>", "3: <javascript>", "4: <scripting>"],
    pageTwo: ["4:", "5:", "Correct Answer 2", "7:"],
    pageThree: ['1: msgBox("Hello World");', '2: msg("Hello World");', '3: alertBox("Hello World");', '4: alert("Hello World")'],
    pageFour: ["1: function = myFunction()", "2: function myFunction()", "3: function:myFunction()", "4: function(myFunction())"],
    pageFive: ["16:", "17:", "18:", "19:"]
  };

var secondsLeft = 60;
var pageNumber = 0;
var points;

startButton.addEventListener("click", startQuiz);

clickable.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".answer-button")) {
        pageNumber++;
        if (element.textContent.includes("1: <script>") ||
        (element.textContent.includes()) ||
        (element.textContent.includes('4: alert("Hello World")')))
        {
            secondsLeft = secondsLeft;
        } else {
            secondsLeft = secondsLeft - 10;
        }
        displayQuestionPage();
    }
});

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
        } else if (secondsLeft <= 0) {
            document.getElementById("timer").setAttribute("class", "hidden");
            displayScorePage();
        }
    }, 1000);
}

function displayIntroPage(){
    scorePage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    introPage.setAttribute("class", "display");
    pageNumber = 0;
}

function displayQuestionPage(){
    scorePage.setAttribute("class", "hidden");
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "display");
    questionText.textContent = questions[pageNumber-1];
    if (pageNumber === 1) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.pageOne[i];}
    } else if (pageNumber === 2) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.pageTwo[i];}
    } else if (pageNumber === 3) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.pageThree[i];}
    } else if (pageNumber === 4) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.pageFour[i];}
    } else if (pageNumber === 5) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.pageFive[i];}
    } else if (pageNumber === 6) {
        displayScorePage();
    }
}

function displayScorePage(){
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    scorePage.setAttribute("class", "display");
}