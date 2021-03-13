var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var introPage = document.querySelector("#intro-page");
var questionPage = document.querySelector("#question-page");
var scorePage = document.querySelector("#score-page");
var highScorePage = document.querySelector("#high-score-page");
var questionText = document.querySelector("#question-text");
var clickable = document.querySelector(".clickable");
var answerText = document.querySelectorAll(".answer-button");
var endText = document.querySelector("#end-text");
var scoreText = document.querySelector("#score-text");
var submit = document.querySelector("#submit");
var allScoresListed = document.querySelector("#all-scores-listed");
var goBack = document.querySelector("#go-back");
var clearHighScores = document.querySelector("#clear-high-scores");

var questions = [
"Inside which HTML element do we put the JavaScript?",
'What is the correct JavaScript syntax to change the content of the following HTML element: <p id="demo">This is an example.</p>', 
'How do you write "Hello World" in an alert box?', "How do you create a function in JavaScript?",
"How do you write an IF statement in JavaScript?"
]

var answers = {
    questionOne: ["1: <script>", "2: <JS>", "3: <javascript>", "4: <scripting>"],
    questionTwo: ['1: document.getElementByName("p").innerHTML = "Hello World!"', '2: #demo.innerHTML = "Hello World!"', '3: document.getElement("p").innerHTML = "Hello World!"', '4: document.getElementById("demo").innerHTML = "Hello World!"'],
    questionThree: ['1: msgBox("Hello World");', '2: msg("Hello World");', '3: alertBox("Hello World");', '4: alert("Hello World")'],
    questionFour: ["1: function = myFunction()", "2: function myFunction()", "3: function:myFunction()", "4: function(myFunction())"],
    questionFive: ["1. if i==5 then", "2. if i=5", "3. if (i==5)", "if i=5 then"]
  };

var secondsLeft = 0;
var pageNumber = 0;
var points = 0;
var timePoints;
var finalScore;

startButton.addEventListener("click", startQuiz);

clickable.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".answer-button")) {
        pageNumber++;
        if (element.textContent.includes("1: <script>") ||
        (element.textContent.includes('4: document.getElementById("demo").innerHTML = "Hello World!"')) || (element.textContent.includes('4: alert("Hello World")')) ||
        (element.textContent.includes("2: function myFunction()")) || 
        (element.textContent.includes("3. if (i==5)"))) {
            points = points + 100;
        } else {
            secondsLeft = secondsLeft - 10;
        }
        displayQuestionPage();
    }
});

submit.addEventListener("click", function(event) {
    event.preventDefault
    setHighScore();
    secondsLeft = 60;
    pageNumber = 0;
    displayHighScorePage();
})

goBack.addEventListener("click", function() {
    displayIntroPage();
})

clearHighScores.addEventListener("click", function() {
    localStorage.clear();
})

function displayIntroPage(){
    hideAllPages();
    introPage.setAttribute("class", "display");
    pageNumber = 0;
    secondsLeft = 0;
    timer.innerHTML = secondsLeft + " seconds remaining";
}

function displayQuestionPage(){
    hideAllPages();
    questionPage.setAttribute("class", "display");
    questionText.textContent = questions[pageNumber-1];
    if (pageNumber === 1) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionOne[i];}
    } else if (pageNumber === 2) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionTwo[i];}
    } else if (pageNumber === 3) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionThree[i];}
    } else if (pageNumber === 4) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionFour[i];}
    } else if (pageNumber === 5) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionFive[i];}
    } else if (pageNumber === 6) {
        displayScorePage();
    }
}

function displayScorePage(){
    timePoints = secondsLeft * 10;
    finalScore = points + timePoints;
    
    hideAllPages();
    scorePage.setAttribute("class", "display");
    endText.textContent = "All done!";
    scoreText.textContent = "Your final score is " + finalScore + ".";
}

function displayHighScorePage() {
    hideAllPages();
    highScorePage.setAttribute("class", "display");
    newVar = localStorage.getItem("highscore")
    allScoresListed.textContent = "1. " + newVar;
}

function setHighScore() {
    localStorage.setItem("highscore", finalScore); 
}

function startQuiz() {
    pageNumber++;
    displayQuestionPage();
    startTimer();
}

function startTimer() {
    secondsLeft = 60;
    timerFunction = setInterval(function() {
        secondsLeft--;
        if (secondsLeft > 1) {
            timer.innerHTML = secondsLeft + " seconds remaining";
        } else if (secondsLeft === 1) {
            timer.innerHTML = secondsLeft + " second remaining";
        } if (secondsLeft <= 0 || pageNumber === 6) {
            clearTimeout(timerFunction);
            displayScorePage();
        }
    }, 1000);
}

function hideAllPages() {
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    scorePage.setAttribute("class", "hidden");
    highScorePage.setAttribute("class", "hidden");
}

displayIntroPage();