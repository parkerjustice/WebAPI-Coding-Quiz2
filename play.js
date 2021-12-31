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

