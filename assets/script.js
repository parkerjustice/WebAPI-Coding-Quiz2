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
var endgame;
timeEl.innerText = 0;

var beginquizEl = document.querySelector("#beginquiz");
var goEl = document.querySelector("#goback")
var startFresh = document.querySelector("#start-fresh")

var randomQ
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
    endgame = ""
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

// SETTING UP TIMER // 
var timeSet = function() {
    timeleft = 60;

    var checkTime = setInterval(function() {
        timeEl.innerText = timeleft;
        timeleft--

        if (endgame) {
            clearInterval(checkTime)
        }
       
        if (timeleft < 0) {
            showScore()
            timeEl.innerText = 0
            clearInterval(checkTime)
        }

    }, 1000)
}

// STARTING THE GAME //
var gameStart = function() {
    
    initialClassEl.classList.add('off');
    initialClassEl.classList.remove('on');
    initialQuestionEl.classList.remove('off');
    initialQuestionEl.classList.add('on');
    
    randomQ = questions.sort(() => Math.random() - 0.5)
    timeSet();
    setQuestion();
}

// NEXT QUESTIONS //
var setQuestion = function() {
    reset();
    displayQuestion(randomQuestions[questionIndex])
}

// REMOVE BUTTONS //
var reset = function() {
    while (exampleEl.firstChild) {
        exampleEl.removeChild(exampleEl.firstChild)
    };
};

// DISPLAY QUESTIONS //
var displayQuestion = function(index) {
    questionsEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answer = document.createElement('button')
        answer.innerText = index.choices[i].choice
        answer.classList.add('btn')
        answer.classList.add('answerbtn')
        answer.addEventListener("click", checkAnswer)
        exampleEl.appendChild(answer)
    }
};

// CORRECT //
var correctAnswer = function() {
    if (correctEl.className = "no") {
        correctEl.classList.remove("no")
        correctEl.classList.add("tag")
        incorrectEl.classList.remove("tag")
        incorrectEl.classList.add("no")
    }
}  

// INCORRECT //
var incorrectAnswer = function() {
    if (incorrectEl.className = "no") {
        incorrectEl.classList.remove("no")
        incorrectEl.classList.add("tag")
        correctEl.classList.remove("tag")
        correctEl.classList.add("no")
    }
}

// CHECK TO SEE IF ANSWER IS CORRECT OR NOT //
var checkAnswer = function(event) {
    var selected = event.target 
        if (randomQ[questionIndex].a === selected.innerText) {
            correctAnswer()
            points = points + 8
        } else {
            incorrectAnswer()
            points = points - 1;
            timeleft = timeleft - 5;
        };
        questionIndex++
        if  (randomQ.length > questionIndex + 1) {
            setQuestion()
        } else {
            endgame = "true";
            viewPoints();
        }
}

startBtnEl.addEventListener("click", beginning)
backBtnEl.addEventListener("click", beginSect)