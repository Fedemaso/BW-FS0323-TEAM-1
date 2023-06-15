//Valori grafico
const totalQuestions = 10; // Numero totale di domande
var quizScore = 4; // Recuperare lo score del quiz da localStorage o altro metodo di archiviazione
var incorrectAnswers = totalQuestions - quizScore; // Calcola il numero di risposte errate

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
  type: 'doughnut',
  data: {
    datasets: [{
      data: [incorrectAngle, correctAngle],
      backgroundColor: ['#D20094', '#00FFFF'],
      borderWidth: 0,
      borderAlign: 'center',
    }],
    labels: ['Wrong', 'Correct']
  },
  options: {
    cutout: 90, 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
    }
  }
};

// Creazione del grafico
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, config);

const validate = () => {
  window.location.href = "Feedback.html";
}

// Funzione per aggiornare le informazioni del grafico
function updateChartInfo() {
  const chartInfoLeft = document.getElementById("chart-info-left");
  const chartInfoRight = document.getElementById("chart-info-right");

  const correctPercentage = Math.round((quizScore / totalQuestions) * 100);
  const correctCount = quizScore;
  const incorrectCount = incorrectAnswers;

  chartInfoLeft.innerHTML = `
    Correct<br>
    ${correctPercentage}%<br>
    ${correctCount}/${totalQuestions} questions
  `;

  chartInfoRight.innerHTML = `
    Wrong<br>
    ${100 - correctPercentage}%<br>
    ${incorrectCount}/${totalQuestions} questions
  `;
}

// Chiamare la funzione `updateChartInfo()` dopo aver creato il grafico
updateChartInfo();