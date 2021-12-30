let initialScreenEl = document.getElementById("initial-screen");
let questionsEl = document.getElementById("question-sect");
let scoresEl = document.getElementById("scores");
let highScoreEl = document.getElementById("high-score");
let questionAreaEl = document.getElementById("question-area");





let questionArea = [
    {
        question: "Can we override the private method in Java?",
        answer:'1 No',
        choices:[{choice:'1 No'}, {choice:'2 Yes'}]
    }
]



let beginQuiz = function () {
    highScoreEl.classList.add("off")
}




btnBeginQuizEl.addEventListener("click",beginQuiz)