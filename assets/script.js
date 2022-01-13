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
var gobackEl = document.querySelector("#goback")
var startFresh = document.querySelector("#start-fresh")

var randomQ
var questionIndex = 0

var records = [];


let questions = [
    {
        question: "Can we override the private method in Java?",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    },
    {
        question: "Does Javascript understand inut and output",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    },
    {
        question: "Does JavaScript use boolean Type",
        answer:'2 Yes',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    },
    {
        question: "New variables in JavaScript are declared using all three of the following: let, const, yaw",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    },
]

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

var gameStart = function() {
    
    initialClassEl.classList.add('no');
    initialClassEl.classList.remove('yes');
    initialQuestionEl.classList.remove('no');
    initialQuestionEl.classList.add('yes');
    
    randomQ = questions.sort(() => Math.random() - 0.5)
    timeSet();
    setQuestion();
}


var setQuestion = function() {
    reset();
    displayQuestion(randomQuestions[questionIndex])
}


var reset = function() {
    while (exampleEl.firstChild) {
        exampleEl.removeChild(exampleEl.firstChild)
    };
};


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


var correctAnswer = function() {
    if (correctEl.className = "no") {
        correctEl.classList.remove("no")
        correctEl.classList.add("tag")
        incorrectEl.classList.remove("tag")
        incorrectEl.classList.add("no")
    }
}  

var incorrectAnswer = function() {
    if (incorrectEl.className = "no") {
        incorrectEl.classList.remove("no")
        incorrectEl.classList.add("tag")
        correctEl.classList.remove("tag")
        correctEl.classList.add("no")
    }
}


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
            showings();
        }
}


var showings = function() {
    initialQuestionEl.classList.add("no");
    finalSectEl.classList.remove("no");
    finalSectEl.classList.add("yes");

    var viewer = document.createElement("p");
    viewer.innerText = ("Your final score is " + points + "!");
    highScoreSectEl.appendChild(viewer);
}       


var savedScore = function(event) { 
    event.preventDefault() 
    var name = document.querySelector("#name").value;
    if (!name) {
        alert("Please enter your name!");
        return;
    }

    nameForm.reset();

    var record = {
        name: name,
        points: points,
      } 
  
      records.push(record);
      records.sort((a, b) => {return b.points-a.points});
  
      while (lsHighScoreEl.firstChild) {
         lsHighScoreEl.removeChild(lsHighScoreEl.firstChild)
      }
      
      for (var i = 0; i < records.length; i++) {
        var recordsEl = document.createElement("li");
        recordsEl.className = "high-score";
        recordsEl.innerHTML = records[i].name + " - " + records[i].points;
        lsHighScoreEl.appendChild(recordsEl);
      }
  
      saveRecords();
      displayRecords();
  
  }


var saveRecords = function () {
    localStorage.setItem("records", JSON.stringify(records))
            
}

var loadRecords = function () {
    var loadedRecords = localStorage.getItem("records")
        if (!loadedRecords) {
        return false;
    }

    records = JSON.parse(loadedRecords);
    records.sort((a, b) => {return b.points-a.points})
 

    for (var i = 0; i < loadedRecords.length; i++) {
        var recordsEl = document.createElement("li");
        recordsEl.className = "high-score";
        recordsEl.innerText = loadedRecords[i].name + " - " + loadedRecords[i].points;
        sectEl.appendChild(recordsEl);

        records.push(loadedRecords[i]);
    }
}  


var displayRecords = function() {

    highScoreSectEl.classList.remove("no");
    highScoreSectEl.classList.add("yes");
    endgame = "true"

    if (finalSectEl.className = "yes") {
        finalSectEl.classList.remove("yes");
        finalSectEl.classList.add("no");
    }
    if (initialClassEl.className = "yes") {
        initialClassEl.classList.remove("yes");
        initialClassEl.classList.add("no");
    }     
    if (boxQuestionEl.className = "yes") {
        boxQuestionEl.classList.remove("yes");
        boxQuestionEl.classList.add("no");
    }
    if (correctEl.className = "yes") {
        correctEl.classList.remove("yes");
        correctEl.classList.add("no");
    }
    if (incorrectEl.className = "yes") {
        incorrectEl.classList.remove("yes");
        incorrectEl.classList.add("no");
    }
}


var recordClear = function() {
    records = [];

    while (sectEl.firstChild) {
        sectEl.removeChild(lsectEl.firstChild);
    }

    localStorage.clear(records)
}

loadRecords() 


        

beginquizEl.addEventListener("click", gameStart)

gobackEl.addEventListener("click", startPage)

scoresEl.addEventListener("click", displayRecords)

savehere.addEventListener("submit", savedScore)

startFresh.addEventListener("click", recordClear)