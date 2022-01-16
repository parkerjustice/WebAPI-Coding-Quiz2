var startQuiz = document.getElementById("startQuiz");
var startQuestion = document.getElementById("startQuestion");
var userScores = document.getElementById("yourscores");
var endSection = document.getElementById("endSection");
var highScoreSection = document.getElementById("highScoreSection");
var scores = document.getElementById("scores");
var sect = document.getElementById("sect");
var saveScores = document.getElementById("savehere");

var quiz = document.getElementById("question");
var example = document.getElementById("exmple");
var timer = document.querySelector("#timer");
var points = 0;
var remainingTime;
var endgame;
timer.innerText = 0;

var beginQuiz = document.querySelector("#beginquiz");
var goBack = document.querySelector("#goback");
var startFresh = document.querySelector("#start-fresh");

var randomQ;
var questionIndex = 0;

var records = [];

let questions = [
  {
    question: "Can we override the private method in Java?",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question: "Does Javascript understand inut and output",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question: "Does JavaScript use boolean Type",
    answer: "Yes",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
  {
    question:
      "New variables in JavaScript are declared using all three of the following: let, const, yaw",
    answer: "No",
    choices: [{ choice: "No" }, { choice: "Yes" }],
  },
];

var startPage = function () {
  questionIndex = 0;
  endgame = false;
  timer.textContent = 0;
  points = 0;
};

var timeSet = function () {
  timeleft = 60;

  var checkTime = setInterval(function () {
    timer.innerText = timeleft;
    timeleft--;

    if (endgame) {
      clearInterval(checkTime);
    }

    if (timeleft < 0) {
      showScore();
      timeEl.innerText = 0;
      clearInterval(checkTime);
    }
  }, 1000);
};

var gameStart = function () {
  startQuiz.classList.add("no");
  startQuiz.classList.remove("yes");
  startQuestion.classList.remove("no");
  startQuestion.classList.add("yes");

  randomQ = questions.sort(() => Math.random() - 0.5);
  timeSet();
  setQuestion();
};

var setQuestion = function () {
  displayQuestion(randomQ[questionIndex]);
  //   reset();
};

// var reset = function () {
//   while (example.firstChild) {
//     example.removeChild(example.firstChild);
//   }
// };

var displayQuestion = function (index) {
  quiz.innerText = index.question;
  for (var i = 0; i < index.choices.length; i++) {
    var answer = document.createElement("button");
    answer.innerText = index.choices[i].choice;
    answer.classList.add("btn");
    answer.classList.add("answerbtn");
    answer.addEventListener("click", checkAnswer);
    quiz.append(answer);
  }
};

var correctAnswer = function () {
  if ((correct.className = "no")) {
    correct.classList.remove("no");
    correct.classList.add("tag");
    incorrect.classList.remove("tag");
    incorrect.classList.add("no");
  }
};

var incorrectAnswer = function () {
  if ((incorrect.className = "no")) {
    incorrect.classList.remove("no");
    incorrect.classList.add("tag");
    correct.classList.remove("tag");
    correct.classList.add("no");
  }
};

var checkAnswer = function (event) {
  var selected = event.target;
  if (randomQ[questionIndex].a === selected.innerText) {
    correctAnswer();
    points = points + 8;
  } else {
    incorrectAnswer();
    points = points - 1;
    timeleft = timeleft - 5;
  }
  questionIndex++;
  if (randomQ.length > questionIndex + 1) {
    setQuestion();
  } else {
    endgame = "true";
    showings();
  }
};

var showings = function () {
  startQuestion.classList.add("no");
  endSection.classList.remove("no");
  endSection.classList.add("yes");

  var viewer = document.createElement("p");
  viewer.innerText = "Your final score is " + points + "!";
  highScoreSection.appendChild(viewer);
};

var savedScore = function (event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  if (!name) {
    alert("Please enter your name!");
    return;
  }

  nameForm.reset();

  var record = {
    name: name,
    points: points,
  };

  records.push(record);
  records.sort((a, b) => {
    return b.points - a.points;
  });

  while (lsHighScoreEl.firstChild) {
    lsHighScoreEl.removeChild(lsHighScoreEl.firstChild);
  }

  for (var i = 0; i < records.length; i=i+1) {
    var recordsEl = document.createElement("li");
    recordsEl.className = "high-score";
    recordsEl.innerHTML = records[i].name + " - " + records[i].points;
    lsHighScoreEl.appendChild(recordsEl);
  }

  saveRecords();
  displayRecords();
};

var saveRecords = function () {
  localStorage.setItem("records", JSON.stringify(records));
};

var loadRecords = function () {
  var loadedRecords = localStorage.getItem("records");
  if (!loadedRecords) {
    return false;
  }

  records = JSON.parse(loadedRecords);
  records.sort((a, b) => {
    return b.points - a.points;
  });

  for (var i = 0; i < loadedRecords.length; i++) {
    var recordsEl = document.createElement("li");
    recordsEl.className = "high-score";
    recordsEl.innerText =
      loadedRecords[i].name + " - " + loadedRecords[i].points;
    sect.appendChild(recordsEl);

    records.push(loadedRecords[i]);
  }
};

var displayRecords = function () {
  highScoreSection.classList.remove("no");
  highScoreSection.classList.add("yes");
  endgame = "true";

  if ((endSection.className = "yes")) {
    endSection.classList.remove("yes");
    endSection.classList.add("no");
  }
  if ((startQuiz.className = "yes")) {
    startQuiz.classList.remove("yes");
    startQuiz.classList.add("no");
  }
  if ((startQuestion.className = "yes")) {
    startQuestion.classList.remove("yes");
    startQuestion.classList.add("no");
  }
  if ((correct.className = "yes")) {
    correct.classList.remove("yes");
    correct.classList.add("no");
  }
};

var recordClear = function () {
  records = [];

  while (sect.firstChild) {
    sect.removeChild(lsectEl.firstChild);
  }

  localStorage.clear(records);
};

loadRecords();

beginQuiz.addEventListener("click", gameStart);

goBack.addEventListener("click", startPage);

// scoresEl.addEventListener("click", displayRecords);

saveScores.addEventListener("submit", savedScore);

startFresh.addEventListener("click", recordClear);

startPage();
