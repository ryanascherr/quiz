var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementsByTagName("header")[0].setAttribute("class", "hidden");
    document.getElementsByTagName("button")[0].setAttribute("class", "hidden");
}