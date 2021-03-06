var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var introPage = document.querySelector("#intro-page");
var questionPage = document.querySelector("#question-page");
var scorePage = document.querySelector("#score-page");
var highScorePage = document.querySelector("#high-score-page");
var questionText = document.querySelector("#question-text");
var answerText = document.querySelectorAll(".answer-button");
var clickable = document.querySelector(".clickable");
var scoreText = document.querySelector("#score-text");
var submit = document.querySelector("#submit");
var allScoresListed = document.querySelector("#all-scores-listed");
var goBack = document.querySelector("#go-back");
var clearHighScores = document.querySelector("#clear-high-scores");
var initialsText = document.querySelector("#initials");
var orderedList = document.querySelector("#ordered-list-high-scores");
var viewHighScores = document.querySelector("#view-high-scores");

var questions = [
"1. Inside which HTML element do we put the JavaScript?",
'2. What is the correct JavaScript syntax to change the content of the following HTML element: <p id="demo">This is an example.</p>', 
'3. How do you write "Hello World" in an alert box?',
"4. How do you create a function in JavaScript?",
"5. How do you write an IF statement in JavaScript?"
]
var answers = {
    questionOne: ["1: <script>", "2: <JS>", "3: <javascript>", "4: <scripting>"],
    questionTwo: ['1: document.getElementByName("p").innerHTML = "Hello World!"', '2: #demo.innerHTML = "Hello World!"', '3: document.getElement("p").innerHTML = "Hello World!"', '4: document.getElementById("demo").innerHTML = "Hello World!"'],
    questionThree: ['1: msgBox("Hello World");', '2: msg("Hello World");', '3: alertBox("Hello World");', '4: alert("Hello World");'],
    questionFour: ["1: function = myFunction()", "2: function myFunction()", "3: function:myFunction()", "4: function(myFunction())"],
    questionFive: ["1. if i==5 then", "2. if i=5", "3. if (i==5)", "4. if i=5 then"]
  }

var secondsLeft = 0;
var questionNumber = 0;
var points = 0;
var timePoints;
var finalScore;

startButton.addEventListener("click", startQuiz);

clickable.addEventListener("click", function(event) {
    var element = event.target;

    //if user clicks on a button and the text matches one of the 5 answers, give them points and them them they were correct. Otherwise, remove seconds and tell them they were incorrect. Increase questionNumber and then display the next question.
    if (element.matches(".answer-button")) {

        //this variable changes which questions and answers are displayed
        questionNumber++;

        if (element.textContent.includes("1: <script>") ||
        (element.textContent.includes('4: document.getElementById("demo").innerHTML = "Hello World!"')) || (element.textContent.includes('4: alert("Hello World")')) ||
        (element.textContent.includes("2: function myFunction()")) || 
        (element.textContent.includes("3. if (i==5)"))) {
            points = points + 100;
            document.getElementById("feedback").setAttribute("class", "correct")
            document.getElementById("feedback").textContent = "Correct! :)"
        } else {
            secondsLeft = secondsLeft - 10;
            document.getElementById("feedback").setAttribute("class", "incorrect")
            document.getElementById("feedback").textContent = "Incorrect! :("
        }
        displayQuestionPage();
    }
});

submit.addEventListener("click", function(event) {
    event.preventDefault
    setHighScore();
    secondsLeft = 60;
    questionNumber = 0;
    displayHighScorePage();
})

goBack.addEventListener("click", function() {
    displayIntroPage();
})

viewHighScores.addEventListener("click", function() {
    hideAllPages();
    highScorePage.setAttribute("class", "display");
})

clearHighScores.addEventListener("click", function() {
    localStorage.clear();
    for (i = 0; i < orderedList.children.length; i++) {
        orderedList.removeChild(orderedList.childNodes[i]);
    }
})

function hideAllPages() {

    //used to hide all pages before displaying another one
    introPage.setAttribute("class", "hidden");
    questionPage.setAttribute("class", "hidden");
    scorePage.setAttribute("class", "hidden");
    highScorePage.setAttribute("class", "hidden");
}

function displayIntroPage(){
    hideAllPages();
    introPage.setAttribute("class", "display");
    questionNumber = 0;
    secondsLeft = 0;
    points = 0;
    timePoints = 0;
    timer.innerHTML = secondsLeft + " seconds remaining";
}

function displayQuestionPage(){
    hideAllPages();
    questionPage.setAttribute("class", "display");
    questionText.textContent = questions[questionNumber-1];
    if (questionNumber === 1) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionOne[i];}
    } else if (questionNumber === 2) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionTwo[i];}
    } else if (questionNumber === 3) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionThree[i];}
    } else if (questionNumber === 4) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionFour[i];}
    } else if (questionNumber === 5) {
        for (i = 0; i < 4; i++) {
        answerText[i].textContent = answers.questionFive[i];}
    } else if (questionNumber === 6) {
        displayScorePage();
    }
}

function displayScorePage(){
    timePoints = secondsLeft;
    finalScore = points + timePoints;
    
    hideAllPages();
    scorePage.setAttribute("class", "display");
    scoreText.textContent = "Your final score is " + finalScore + ".";
}

function displayHighScorePage() {

    //hide all other pages
    hideAllPages();

    //remove the feedback text
    document.getElementById("feedback").textContent = "";

    //display highScorePage and allScoresListed
    highScorePage.setAttribute("class", "display");

    //get highscore and initials from local storage
    aHighScore = localStorage.getItem("highscore");
    anInitial = localStorage.getItem("initials");

    //make initials all caps and remove any blank space
    anInitial = anInitial.toUpperCase();
    anInitial = anInitial.trim();
    
    //create a list item
    newListItem = document.createElement("li");

    //place the text in the list item
    newListItem.textContent = " " + anInitial + " - " + aHighScore;

    //apply style to li
    newListItem.setAttribute("class", "ol-style");

    //append the list item to a ol
    orderedList.appendChild(newListItem);
}

function startQuiz() {
    questionNumber++;
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
        } if (secondsLeft <= 0 || questionNumber === 6) {
            clearTimeout(timerFunction);
            displayScorePage();
        }
    }, 1000);
}

function setHighScore() {
    var initials = initialsText.value;

    localStorage.setItem("highscore", finalScore);
    localStorage.setItem("initials", initials);
}

displayIntroPage();