
localStorage.removeItem("result");

// DOMANDE
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
    "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
    "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    correct_answer: "JavaScript",
    incorrect_answers: ["C#", "Python", "PHP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
    "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    incorrect_answers: ["Romania", "Russia", "Rwanda"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
    "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does RAID stand for?",
    correct_answer: "Redundant Array of Independent Disks",
    incorrect_answers: ["Rapid Access for Indexed Devices", "Range of Applications with Identical Designs", "Randomized Abstract Identification Description"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "What is the number of keys on a standard Windows Keyboard?",
    correct_answer: "104",
    incorrect_answers: ["64", "94", "76"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
    "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
];

const timerCircle = document.getElementById("timer-circle");
let timerNumber = document.getElementById("timer-number");
let countdown = 60;
let timerInterval;

timerNumber.textContent = countdown;

// Variabili
let currentQuestionIndex = 0; // Indice della domanda corrente
let userAnswers = []; // Array per salvare le risposte dell'utente
let score = 0; // Inizializza il punteggio a 0

function updateQuestionNumber() {
  const questionNumberElement = document.getElementById("question-number");
  questionNumberElement.textContent = `QUESTION ${currentQuestionIndex + 1}`;
  const totalQuestionNum = document.getElementById("total-qn");
  totalQuestionNum.textContent = `/ ${questions.length}`;
}
updateQuestionNumber();

// Funzione per mostrare la domanda corrente
function showCurrentQuestion() {
  timerNumber.textContent = countdown;
  const currentQuestion = questions[currentQuestionIndex]; // Ottieni la domanda corrente

  // Mostra il testo della domanda
  const questionText = document.getElementById("question-text");
  questionText.textContent = currentQuestion.question;

  // Mostra le opzioni di risposta come radio button
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = ""; // Rimuovi eventuali opzioni precedenti

  currentQuestion.incorrect_answers.forEach((option) => {
    //Creazione elementi: radio-button, label e div
    const radioButton = document.createElement("input");
    const optionLabel = document.createElement("label");
    const radioButtonSgContainer = document.createElement("div");

    //Aggiunta attributi agli elementi creati
    //Al radio-button
    radioButton.type = "radio";
    radioButton.name = "answer";
    radioButton.classList = "radio-button";
    radioButton.value = option;
    //Al div
    radioButtonSgContainer.classList.add("btn-container");
    //Alla label
    optionLabel.textContent = option;

    // Aggiunta event listener per colorare il contenitore della label di viola quando viene cliccata
    optionLabel.addEventListener("click", function () {
      const allContainers = document.querySelectorAll(".btn-container");
      allContainers.forEach((container) => {
        container.style.backgroundColor = ""; // Rimuovi il colore di sfondo da tutti i contenitori
      });
      radioButtonSgContainer.style.backgroundColor = "#900080"; // Colora il contenitore della label cliccata di viola
    });

    //Annidamento elementi con append, secondo la seguente struttura:
    //optionsContainer (vedi riga 122) > div > label > radio-button

    optionsContainer.appendChild(radioButtonSgContainer);
    radioButtonSgContainer.appendChild(optionLabel);
    optionLabel.appendChild(radioButton);
  });

  // Aggiunta dell'opzione corretta come radio button

  // Creazione elementi: radio-button, label e div
  const correctRadioButton = document.createElement("input");
  const correctOptionLabel = document.createElement("label");
  const radioButtonSgContainer = document.createElement("div");

  // Aggiunta attributi agli elementi creati
  // Al radio-button
  correctRadioButton.type = "radio";
  correctRadioButton.name = "answer";
  correctRadioButton.classList = "radio-button";
  correctRadioButton.value = currentQuestion.correct_answer;
  // Al div
  radioButtonSgContainer.classList.add("btn-container");
  // Alla label
  correctOptionLabel.textContent = currentQuestion.correct_answer;

  // Aggiunta event listener per colorare il contenitore della label corretta di viola quando viene cliccata
  correctOptionLabel.addEventListener("click", function () {
    const allContainers = document.querySelectorAll(".btn-container");
    allContainers.forEach((container) => {
      container.style.backgroundColor = ""; // Rimuovi il colore di sfondo da tutti i contenitori
    });
    radioButtonSgContainer.style.backgroundColor = "#900080"; // Colora il contenitore della label corretta di viola
  });

  // Annidamento elementi con append, secondo la seguente struttura:
  // optionsContainer (vedi riga 122) > div > label > radio-button
  optionsContainer.appendChild(radioButtonSgContainer);
  radioButtonSgContainer.appendChild(correctOptionLabel);
  correctOptionLabel.appendChild(correctRadioButton);
}

showCurrentQuestion();

// Funzione per passare alla domanda successiva
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    updateQuestionNumber(); // Aggiorna il numero della domanda corrente
    showCurrentQuestion();
  } else {
    // Se tutte le domande sono state risposte, apri la pagina dei risultati
    clearInterval(timerInterval);
    window.location.href = "Results.html";
  }

  if (countdown === 0) {
    handleTimerExpiration();
    return;
  }
}

// Funzione per aggiungere la classe al div del
function addClasstoRBParent() {
  let checked_RB = document.querySelector('input[name="answer"]:checked');
  if (checked_RB != null) {
    checked_RB.parentElement.parentElement.classList.toggle("checked");
    console.log(checked_RB.parentElement.parentElement);
  }
}

// Funzione per gestire la selezione di una risposta
function handleAnswerSelection() {
  countdown = 60; // Reimposta il countdown a 60

  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  )?.value;
  if (selectedAnswer != null) {
    userAnswers.push(selectedAnswer); // Salva la risposta dell'utente
  } else {
    userAnswers.push(null); // Aggiungi una risposta nullo per indicare che il tempo è scaduto
  }

  addClasstoRBParent();

  const currentQuestion = questions[currentQuestionIndex]; // Ottieni la domanda corrente
  if (selectedAnswer === currentQuestion.correct_answer) {
    // Aggiungi un punto al punteggio se la risposta è corretta
    score++;
    localStorage.setItem("result", score); // Memorizzazione valore nel localStorage
  }

  // Aggiorna il punteggio visualizzato nell'HTML
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;

  nextQuestion();
}

// TIMER
// Calcolo dell'offset del dash del cerchio

let circle = document.getElementById("timer-circle");
let circumference = 2 * Math.PI * circle.getAttribute("r");

// Aggiornamento dello stile del cerchio
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  countdown--;
  timerNumber.textContent = countdown;

  let progress = (countdown / 60) * circumference;
  circle.style.strokeDashoffset = progress;

  if (countdown === 0) {
    handleAnswerSelection();
  }
}

startTimer();
