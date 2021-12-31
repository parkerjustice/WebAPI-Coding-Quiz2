const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


 let currentQuestion = {}
 let accetingAnswers = true
 let score = 0
 let questionCounter = 0
 let availableQuestions = [
 ]

 let availableQuestions = []

 let questions = [

    {
    question: 'What is sdf',
    choice: '2',
    choice: '3',
    choice: '4',
    choice: '5',
    answer: 2,
    },

    {
    question: 'What is sdf',
    choice: '2',
    choice: '3',
    choice: '4',
    choice: '5',
    answer: 2,
    },
            
    {
    question: 'What is sdf',
    choice: '2',
    choice: '3',
    choice: '4',
    choice: '5',
    answer: 2,
    },

    {
    question: 'What is sdf',
    choice: '2',
    choice: '3',
    choice: '4',
    choice: '5',
    answer: 2,
    },
 ]

 const SCORE_POINTS = 100
 const MAX_QUESTIONS = 4
 
 startGame = () => {
     questionCounter = 0
     score = 0
     availableQuestions = [...questions]
     getNewQuestion()
 }
 
 getNewQuestion = () => {
     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
         localStorage.setItem('mostRecentScore', score)

         return window.location.assign('/end.html')
     }

     questionCounter++
     progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
     progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

     const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
     currentQuestion = availableQuestions[questionsIndex]
     question.innerText = currentQuestion.question
 }
