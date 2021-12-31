var initialClassEl = document.getElementById("initial-class");
var initialQuestionEl = document.getElementById("initial-question");
var yourscoresEl = document.getElementById("yourscores")
var finalSectEl = document.getElementById("final-sect")

var highScoreSectEl = document.getElementById("highscoresect")
var scoresEl = document.getElementById("scores")
var sectEl = document.getElementById("sect")
var savehere = document.getElementById("savehere")
//Maybe not
var correctEl = document.getElementById("correct")
var incorrectEl = document.getElementById("incorrect")
//Maybe Not

var questionsEl = document.getElementById("question")
var exampleEl = document.getElementById("exmple")
var timerEl = document.querySelector("#timer");
var points = 0;
var remainingTime;
var gameover;
timeEl.innerText = 0;

var beginquizEl = document.querySelector("#beginquiz");
var goEl = document.querySelector("#goback")
var startFresh = document.querySelector("#start-fresh")

var randomQuestions
var questionIndex = 0

var records = [];


let questions = [
    {
        question: "Can we override the private method in Java?",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    }
]

// HOME SCREEN //
var startPage = function () {
    highScoreSectEl.classList.add("no")
    highScoreSectEl.classList.remove("yes")
    initialClassEl.classList.remove("no")
    initialClassEl.classList.add("yes")
    yourscoresEl.removeChild(boxScoreEl.lastChild)
    questionIndex = 0
    gameover = ""
    timeEl.textContent = 0 
    points = 0

    if (correctEl.className = "yes") {
        correctEl.classList.remove("yes");
        correctEl.classList.add("no")
    }
    if (incorrectEl.className = "yes") {
        incorrectEl.classList.remove("yes");
        incorrectEl.classList.add("no");
    }
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