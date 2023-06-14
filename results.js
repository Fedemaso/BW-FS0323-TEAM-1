//GRAFICO DA INSERIRE VALORI

const totalQuestions = 6; // Numero totale di domande
const correctAnswers = 4; // Numero di risposte corrette
const incorrectAnswers = totalQuestions - correctAnswers; // Numero di risposte sbagliate

// Calcolo delle angolazioni in radianti
const totalAngle = 2 * Math.PI;
const correctAngle = (correctAnswers / totalQuestions) * totalAngle;
const incorrectAngle = (incorrectAnswers / totalQuestions) * totalAngle;

// Funzione per aggiornare il grafico con i nuovi dati
function updateChart() {
  const incorrectAnswersCount = totalQuestions - correctAnswersCount;
  const correctAngle = (correctAnswersCount / totalQuestions) * totalAngle;
  const incorrectAngle = (incorrectAnswersCount / totalQuestions) * totalAngle;
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
  }
}
// Creazione del grafico
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, config);
