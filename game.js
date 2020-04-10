const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside what HTML element do we put the JavaScript?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<css>",
    choice4: "<HTML>",
    answer: 1
  },
  {
    question: "What prov. are we in?",
    choice1: "BC",
    choice2: "ON",
    choice3: "AB",
    choice4: "QC",
    answer: 3
  },
  {
    question: "What is the largest city in AB?",
    choice1: "Lloydminster",
    choice2: "Red Deer",
    choice3: "Edmonton",
    choice4: "Calgary",
    answer: 4
  },
];

// Constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  })
}

startGame();
