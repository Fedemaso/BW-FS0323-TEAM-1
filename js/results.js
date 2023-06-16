//Valori grafico
const totalQuestions = 10; // Numero totale di domande
let quizScore = localStorage.getItem("result"); // Recuperare lo score del quiz da localStorage o altro metodo di archiviazione
let incorrectAnswers = totalQuestions - quizScore; // Calcola il numero di risposte errate

// Calcolo delle angolazioni in radianti
const totalAngle = 2 * Math.PI;
const correctAngle = (quizScore / totalQuestions) * totalAngle;
const incorrectAngle = (incorrectAnswers / totalQuestions) * totalAngle;

// Funzione per aggiornare il grafico con i nuovi dati
function updateChart() {
  config.data.datasets[0].data = [incorrectAngle, correctAngle];
  chart.update();
}

// Configurazione iniziale del grafico
const config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [incorrectAngle, correctAngle],
        backgroundColor: ["#D20094", "#00FFFF"],
        borderWidth: 0,
        borderAlign: "center",
      },
    ],
    labels: ["Wrong", "Correct"],
  },
  options: {
    cutout: 130,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
};

// Creazione del grafico
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, config);

const validate = () => {
  window.location.href = "Feedback.html";
};

// Funzione per aggiornare le informazioni del grafico
function updateChartInfo() {
  const resultText = document.getElementById("result-text");
  const correctCount = quizScore;
  const resultBox = document.getElementById("result-text");
  console.log(quizScore);
  if (quizScore >= 6) {
    resultBox.classList.add("chart-messageCorrect");
    resultText.innerHTML = `Congratulations! <span style="color: #00FFFF;">You passed the exam.</span><br>We\'ll send you the certificate in a few minutes. Check your email (including promotions/spam folder).`;
  } else if (quizScore < 6) {
    resultBox.classList.add("chart-messageWrong");
    resultText.innerHTML =
      'Oh no! <span style="color: #D20094;">Unfortunately, you didn\'t pass the exam.</span>';
  } else console.log("ciao");

  const chartInfoLeft = document.getElementById("chart-info-left");
  const chartInfoRight = document.getElementById("chart-info-right");

  const correctPercentage = Math.round((quizScore / totalQuestions) * 100);

  const incorrectCount = incorrectAnswers;

  chartInfoLeft.innerHTML = `
  <span class="info-title">Correct</span><br>
  <span class="info-percentage">${correctPercentage}%</span><br>
  <span class="info-count">${correctCount ?? 0}/${totalQuestions} questions</span>
`;

  chartInfoRight.innerHTML = `
  <span class="info-title">Wrong</span><br>
  <span class="info-percentage">${100 - correctPercentage}%</span><br>
  <span class="info-count">${incorrectCount}/${totalQuestions} questions</span>
`;
}

// Chiamare la funzione `updateChartInfo()` dopo aver creato il grafico
updateChartInfo();

