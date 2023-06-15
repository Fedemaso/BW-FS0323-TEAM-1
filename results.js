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

// Funzione di rendering personalizzato per il testo nel centro del grafico
function renderText(chart) {
  var width = chart.width;
  var height = chart.height;
  var ctx = chart.ctx;
  ctx.restore();

  var text = "Congratulations!"; // Testo da inserire nel centro del grafico
  var fontSize = (height / 100).toFixed(2);
  ctx.font = fontSize + "em sans-serif";
  ctx.textBaseline = "middle";
  var textX = Math.round((width - ctx.measureText(text).width) / 2);
  var textY = height / 2;

  ctx.fillText(text, textX, textY);
  ctx.save();
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
      render: renderText // Funzione di rendering personalizzato
    }
  }
};

// Creazione del grafico
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, config);

const validate = () => {
  window.location.href = "Feedback.html";
}