let timerNumber = document.getElementById('timer-number');
let countdown = 60;
let timerInterval;


timerNumber.textContent = countdown;

setInterval(function() {
  countdown = --countdown <= 0 ? 60 : countdown;

  timerNumber.textContent = countdown;
}, 1000);




let startTimer = function() {
  countdown = 61;

  timerInterval = setInterval(function() {
    countdown = --countdown <= 0 ? 60 : countdown;

    timerNumber.textContent = countdown;


    const progress = (countdown / 60) * 100;

    const timerCircle = document.getElementById('timer-circle');
    timerCircle.style.strokeDasharray = `${progress} 100`;


    if (countdown === 0) {
     
      handleAnswerSelection(); // Passa alla domanda successiva
    }
  }, 6000);
};




// FedeMaso  


// DOMANDE 


const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];



// Variabili
let currentQuestionIndex = 0; // Indice della domanda corrente
let userAnswers = []; // Array per salvare le risposte dell'utente
let score = 0; // Inizializza il punteggio a 0


// Funzione per mostrare la domanda corrente
function showCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex]; // Ottieni la domanda corrente


  

  // Mostra il testo della domanda
  const questionText = document.getElementById("question-text");
  questionText.textContent = currentQuestion.question;

  // Mostra le opzioni di risposta come radio button
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = ""; // Rimuovi eventuali opzioni precedenti

  currentQuestion.incorrect_answers.forEach((option) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "answer";
    radioButton.value = option;
    optionsContainer.appendChild(radioButton);

    const optionLabel = document.createElement("label");
    optionLabel.textContent = option;
    optionsContainer.appendChild(optionLabel);

    optionsContainer.appendChild(document.createElement("br"));
  });

  // Aggiungi l'opzione corretta come radio button
  const correctRadioButton = document.createElement("input");
  correctRadioButton.type = "radio";
  correctRadioButton.name = "answer";
  correctRadioButton.value = currentQuestion.correct_answer;
  optionsContainer.appendChild(correctRadioButton);

  const correctOptionLabel = document.createElement("label");
  correctOptionLabel.textContent = currentQuestion.correct_answer;
  optionsContainer.appendChild(correctOptionLabel);

  optionsContainer.appendChild(document.createElement("br"));
}




// Funzione per gestire la selezione di una risposta
function handleAnswerSelection() {
  clearInterval(startTimer); // Interrompi il timer corrente
  countdown = 60; // Resettare il countdown a 60

  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  ).value;
  userAnswers.push(selectedAnswer); // Salva la risposta dell'utente

    
  


  // Passa alla domanda successiva
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showCurrentQuestion();
  } else {
    // Se tutte le domande sono state risposte, visualizza i risultati
    showResults();
  }
}

// Funzione per mostrare i risultati
function showResults() {
    // Mostra i risultati delle risposte dell'utente
    console.log("Risposte dell'utente:", userAnswers);
  }
  
  // Mostra la prima domanda all'avvio
  showCurrentQuestion();
  
  // Funzione per gestire la selezione di una risposta
  function handleAnswerSelection() {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
      userAnswers.push(selectedAnswer); // Salva la risposta dell'utente
    
      startTimer();


      const currentQuestion = questions[currentQuestionIndex]; // Ottieni la domanda corrente
      if (selectedAnswer === currentQuestion.correct_answer) {
        // Aggiungi un punto al punteggio se la risposta è corretta
        score++;
      }
    
      // Aggiorna il punteggio visualizzato nell'HTML
      const scoreElement = document.getElementById("score");
      scoreElement.textContent = score;
    
      // Passa alla domanda successiva
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showCurrentQuestion();
      } else {
        // Se tutte le domande sono state risposte, visualizza i risultati
        showResults();
      }
    }



    // Funzione per calcolare il risultato e visualizzare la pagina dei risultati
function calculateResult() {
  // Calcola il numero di risposte corrette
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].correct_answer
  );

  // Crea l'elemento del banner dei risultati
  const resultBanner = document.createElement("div");
  resultBanner.id = "result-banner";

  // Verifica il punteggio e imposta il contenuto del banner in base al risultato
  if (correctAnswers.length < 5) {
    resultBanner.className = "red";
    resultBanner.textContent = "Non hai passato l'esame";
  } else if (correctAnswers.length >= 5 && correctAnswers.length <= 8) {
    resultBanner.className = "yellow";
    resultBanner.textContent = "Hai passato l'esame con un buon punteggio";
  } else {
    resultBanner.className = "green";
    resultBanner.textContent = "Hai passato l'esame con un ottimo punteggio! COMPLIMENTI";
  }

  // Rimuovi il contenuto precedente e aggiungi il banner dei risultati
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  questionContainer.appendChild(resultBanner);
}

// Mostra i risultati delle risposte dell'utente
function showResults() {
  console.log("Risposte dell'utente:", userAnswers);
  calculateResult();
}

    



