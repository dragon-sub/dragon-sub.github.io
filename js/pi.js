const monteCarlo = document.getElementById('monteCarlo');
const monte = monteCarlo.getContext('2d');
const serif = ' 30px "Times New Roman", Times, "Noto Serif", "DejaVu Serif", "Liberation Serif", Georgia, serif';
let inside = 0;
let outside = 0;
let stopId = null;

monte.fillStyle = '#fff';
monte.fillRect(0, 0, 800, 900);
monte.beginPath();
monte.moveTo(0, 800);
monte.arc(0, 800, 800, Math.PI * 3 / 2, 0);
monte.fillStyle = '#f2ffff';
monte.fill();

function putDot() {
  const x = Math.random() * 800;
  const y = Math.random() * 800;
  if (x ** 2 + (800 - y) ** 2 <= 640000) {
    inside++;
    monte.fillStyle = '#6bd0d2';
  } else {
    outside++;
    monte.fillStyle = '#d26d6b';
  }
  monte.fillRect(x - 1, y - 1, 3, 3);
  monte.fillStyle = '#fff';
  monte.fillRect(0, 800, 800, 100);
  monte.font = 'italic' + serif;
  monte.fillStyle = '#555';
  monte.fillText('π', 20, 830);
  monte.font = serif;
  monte.fillText('= ' + (4 * inside / (inside + outside)), 45, 830);
  monte.fillText('i = ' + (inside + outside), 20, 880);
  stopId = window.requestAnimationFrame(putDot);
}

document.getElementById('startMonteCarlo').addEventListener('click', putDot);
document.getElementById('stopMonteCarlo').addEventListener('click', () => {window.cancelAnimationFrame(stopId);});