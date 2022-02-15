const quizData = [
  {
    question: "who is the president of Nigeria?",
    a: "Adeshola Daniel",
    b: "Adesh Jake",
    c: "Jonathan Robin",
    d: "Ryan Ryenolds",
    correct: "a",
  },
  {
    question: "How many years is Daniel the coder",
    a: "20",
    b: "30",
    c: "22",
    d: "25",
    correct: "a",
  },
  {
    question: "what is the most used programming language?",
    a: "JavaScript",
    b: "JQuery",
    c: "Ruby",
    d: "Python",
    correct: "a",
  },
  {
    question: "what does HTML stand for?",
    a: "HyperText Markup Language",
    b: "Hyper Makingup Language",
    c: "Hyping The Men in London",
    d: "Hyer Texting The Men Languages",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
  const answerE1s = document.querySelectorAll(".answer");
   
  let answer = undefined;

  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer =  answerE1.id;
    }
  });

  return answer;
}

function deselectAnswers(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
      });
}

submitBtn.addEventListener("click", () => {
//Check to see the answer
    const answer = getSelected();
    console.log(answer)

 if (answer) {
     if (answer === quizData[currentQuiz].correct) {
         score++;
     }
 }
    if (answer) {
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
          } else {
            quiz.innerHTML = '<h2>You answered ' + (score) + " correctly out of " + (quizData.length) + " questions</h2> <button onclick='location.reload()'>Reload</button>";
          }
        }

    
});
