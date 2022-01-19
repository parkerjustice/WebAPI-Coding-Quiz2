var startQuiz = document.getElementById("startQuiz");
var startQuestion = document.getElementById("startQuestion");
var userScores = document.getElementById("yourscores");
var endSection = document.getElementById("endSection");
var highScoreSection = document.getElementById("highScoreSection");
var scores = document.getElementById("scores");
var save = document.getElementById("save");
var saveScores = document.getElementById("savehere");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var quiz = document.getElementById("question");
var example = document.getElementById("example");
var timer = document.querySelector("#timer");
var points = 0;
var remainingTime;
var endgame;
timer.innerText = 0;
var name = document.querySelector('#name');
var beginQuiz = document.querySelector("#beginquiz");
var goBack = document.querySelector("#goback");
var startFresh = document.querySelector("#start-fresh");
var randomQuestions;
var questionIndex = 0;
var records = [];

var startPage = function () {
  questionIndex = 0;
  endgame = false;
  timer.textContent = 0;
  points = 0;
};

var timeSet = function () {
  timeleft = 150;

  var checkTime = setInterval(function () {
    timer.innerText = timeleft;
    timeleft--;

    if (endgame) {
      clearInterval(checkTime);
    }

    if (timeleft < 0) {
      savedScore();
      timeEl.innerText = 0;
      clearInterval(checkTime);
    }
  }, 1000);
};

var gameStart = function () {
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  timeSet();
  setQuestion();
};

let questions = [
  {
    question: "Coding has over 10000 languages",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question: "Coding will never be as important as reading",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question: "You have to work in tech to use coding",
    answer: "Yes",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question:
      "Computer was a job title, and the first programers were men",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
];


var setQuestion = function () {
  displayQuestion(randomQuestions[questionIndex]);
  reset();
};

var reset = function () {

while (example.firstChild) {
example.removeChild(example.firstChild);
}
};

var displayQuestion = function (index) {
  quiz.innerText = index.question;
  for (var i = 0; i < index.choices.length; i=i+1) {
    var answer = document.createElement("button");
    answer.innerText = index.choices[i].choice;
    answer.addEventListener("click", checkAnswer);
    quiz.append(answer);
  }
};

var checkAnswer = function (event) {
  var selected = event.target;
  if (randomQuestions[questionIndex].break === selected.innerText) {
    correctAnswer();
    points = points + 10;
  } else {
    incorrectAnswer();
    points = points - 5;
    timeleft = timeleft - 15;
  }
  questionIndex++;
  if (randomQuestions.length > questionIndex + 1) {
    setQuestion();
  } else {
    endgame = "true";
    showings();
  }
};

var showings = function () {
  
  var viewer = document.createElement("p");

  viewer.innerText = "Your score is" + points ;

  highScoreSection.appendChild(viewer);

};

var correctAnswer = function () {
  if ((correct.className = "no")) {

  }
};

var incorrectAnswer = function () {
  if ((incorrect.className = "no")) {

  }
};


var savedScore = function (event) {

  saveRecords();
  displayRecords();
};

var saveRecords = function () {
  localStorage.setItem("records", JSON.stringify(records));
};

var upploadRecords = function () {
}

var displayRecords = function () {
  endgame = "true";

  if ((endSection.className = "yes")) {

  }
  if ((startQuiz.className = "yes")) {
  }
  if ((startQuestion.className = "yes")) {

  }
  if ((correct.className = "yes")) {
  }
};

var recordClear = function () {
  records = [];

  while (save.firstChild) {
    save.removeChild(save.firstChild);
  }

  localStorage.clear(records);
};



beginQuiz.addEventListener("click", gameStart);

goBack.addEventListener("click", startPage);

saveScores.addEventListener("submit", savedScore);

//startFresh.addEventListener("click", recordClear);

startPage();
