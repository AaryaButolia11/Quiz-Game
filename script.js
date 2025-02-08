const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-buttons");
let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuesiton();
});
function startGame() {
  console.log("started!");
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuesiton();
}

function setNextQuesiton() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElements.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElements.firstChild) {
    answerButtonsElements.removeChild(answerButtonsElements.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  // Set body color to green or red based on correctness
  setStatusClass(document.body, correct);

  // Set button colors
  Array.from(answerButtonsElements.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct"); // Adds green background
  } else {
    element.classList.add("wrong"); // Adds red background
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 10 + 10 = ?",
    answers: [
      { text: "20", correct: true },
      { text: "22", correct: false },
      { text: "21", correct: false },
      { text: "100", correct: false },
    ],
  },
  {
    question: "What is 5 x 6 = ?",
    answers: [
      { text: "30", correct: true },
      { text: "25", correct: false },
      { text: "20", correct: false },
      { text: "35", correct: false },
    ],
  },
  {
    question: "Which number is a prime number?",
    answers: [
      { text: "13", correct: true },
      { text: "20", correct: false },
      { text: "18", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "What is 50 ÷ 5 = ?",
    answers: [
      { text: "10", correct: true },
      { text: "15", correct: false },
      { text: "5", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "Which shape has 4 equal sides?",
    answers: [
      { text: "Square", correct: true },
      { text: "Rectangle", correct: false },
      { text: "Triangle", correct: false },
      { text: "Circle", correct: false },
    ],
  },
  {
    question: "What is 100 - 25 = ?",
    answers: [
      { text: "75", correct: true },
      { text: "50", correct: false },
      { text: "80", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "What comes after 99?",
    answers: [
      { text: "100", correct: true },
      { text: "98", correct: false },
      { text: "101", correct: false },
      { text: "99", correct: false },
    ],
  },
  {
    question: "Which animal is known as the king of the jungle?",
    answers: [
      { text: "Lion", correct: true },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
      { text: "Bear", correct: false },
    ],
  },
  {
    question: "How many hours are there in a day?",
    answers: [
      { text: "24", correct: true },
      { text: "12", correct: false },
      { text: "36", correct: false },
      { text: "48", correct: false },
    ],
  },
  {
    question: "What is 7 + 8 = ?",
    answers: [
      { text: "15", correct: true },
      { text: "16", correct: false },
      { text: "14", correct: false },
      { text: "12", correct: false },
    ],
  },
];
