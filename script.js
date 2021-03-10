var startButton = document.querySelector(".start-button");
var timer = document.querySelector("#timer");

var secondsLeft = 60;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementsByTagName("header")[0].setAttribute("class", "hidden");
    document.getElementsByTagName("button")[0].setAttribute("class", "hidden");
    startTimer();
}

function startTimer() {
    // Sets timer
    
    timerFunction = setInterval(function() {
        secondsLeft = 60;
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