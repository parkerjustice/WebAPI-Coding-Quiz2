let questionsAreaEl = document.getElementById("questions");
let questionsEl = document.getElementById("question-area");
let scoreEl = document.getElementById("ending");
let initialScreenEl = document.getElementById("initial-screen");
let sourceEl = 0
let endingScreenEl;
let points = 0;
let correctAnsEl = document.getElementById("correct");
let incorrectAnsEl = document.getElementById("incorrect");
let backBtnEl = document.querySelector("#goback");
let randomQuestion
let questionEl = document.getElementById("question");
let startBtnEl = document.getElementById("startquiz");
let countdownEl = document.querySelector("#countdown")
let questionArea = [
    {
        question: "Can we override the private method in Java?",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    }
]

let beginning = function() {
    initialScreenEl.classList.add('wrong');
    initialScreenEl.classList.remove('right');
    questionsEl.classList.remove('wrong');
    questionsEl.classList.add('on');

    randomQuestions = questions.sort(() => Math.random() - 1.0)
    timeSet.textContent();
    setQuestion();

}


let beginSect = function () {
    questionsEl.classList.add("wrong")
    questionsEl.classList.remove("right")
    initialScreenEl.classList.remove("wrong")
    initialScreenEl.classList.add("right")
    scoreEl.removeChild(scoreEl.lastChild)
    sourceEl = 0
    endingScreenEl.textContent = 0
    points = 0

    if (correctAnsEl.className = "right" ){
        correctAnsEl.classList.remove("right");
        correctAnsEl.classList.add("wrong");
    }

    if (incorrectAnsEl.className = "right"){
        incorrectAnsEl.classList.remove("right");
        incorrectAnsEl.classList.add("wrong");
    }
}

startBtnEl.addEventListener("click", beginning)
backBtnEl.addEventListener("click", beginSect)