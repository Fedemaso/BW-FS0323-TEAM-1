
localStorage.removeItem("result");

// DOMANDE
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
    "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
    "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
    "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
    "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
    "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
    "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
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
