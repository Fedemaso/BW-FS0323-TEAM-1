//Valori grafico
const totalQuestions = 10; // Numero totale di domande
let quizScore = localStorage.getItem('result'); // Recuperare lo score del quiz da localStorage o altro metodo di archiviazione
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
  <span class="info-title">Correct</span><br>
  <span class="info-percentage">${correctPercentage}%</span><br>
  <span class="info-count">${correctCount}/${totalQuestions} questions</span>
`;

chartInfoRight.innerHTML = `
  <span class="info-title">Wrong</span><br>
  <span class="info-percentage">${100 - correctPercentage}%</span><br>
  <span class="info-count">${incorrectCount}/${totalQuestions} questions</span>
`;
}

// Chiamare la funzione `updateChartInfo()` dopo aver creato il grafico
updateChartInfo();