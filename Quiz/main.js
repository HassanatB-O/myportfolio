const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

var currentQuestion = {};
var acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
var availableQuestions = [];

var questions = [
{
    question: "Can money buy you happiness?",
    choice1: "Yes * 10000",
    choice2: "Yes",
    choice3: "Of course",
    choice4: "Definitely!",
    answer: 1
},
{
    question: "Who is the Beast titan?",
    choice1: "Levi",
    choice2: "Colt",
    choice3: "Reiner",
    choice4: "Zeke",
    answer: 4
},
{
    question: "Who is the GOAT?",
    choice1: "CR7",
    choice2: "Lionel Messi",
    choice3: "Robert Lewandowski",
    choice4: "The person who created this quiz",
    answer: 4
},
{
    question: "What is the trick to peace of mind?",
    choice1: "Money",
    choice2: "Drink water and mind your business",
    choice3: "Love",
    choice4: "Traveling round the world",
    answer: 2
},
{
    question: "Rate my work...",
    choice1: "1-3",
    choice2: "4-6",
    choice3: "6-9",
    choice4: "10",
    answer: 4
}
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => 
{ 
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () =>
{
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(choice =>{
    choice.addEventListener('click', e =>
    {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer? "correct" : "incorrect";
       
        if (classToApply === "correct")
        {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () =>
        {  
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 500);

    });
});

incrementScore = num => 
{
    score += num;
    scoreText.innerText = score;
};

startGame();

