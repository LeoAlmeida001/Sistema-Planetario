const canvas = document.getElementById('solarSystem');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configurações iniciais
let speed = 5;
const planets = [
  { name: 'Mercúrio', distance: 50, size: 4, angle: 0, speed: 0.02 },
  { name: 'Vênus', distance: 80, size: 7, angle: 0, speed: 0.015 },
  { name: 'Terra', distance: 120, size: 8, angle: 0, speed: 0.01 },
  { name: 'Marte', distance: 160, size: 6, angle: 0, speed: 0.008 }
];

// Atualiza velocidade com base no slider
document.getElementById('speed').addEventListener('input', (e) => {
  speed = e.target.value;
});

// Função para renderizar o sistema solar
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar sol
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
  ctx.fill();

  // Desenhar planetas
  planets.forEach((planet) => {
    planet.angle += planet.speed * (speed / 5); // Ajustar velocidade
    const x = canvas.width / 2 + planet.distance * Math.cos(planet.angle);
    const y = canvas.height / 2 + planet.distance * Math.sin(planet.angle);

    // Trajetória
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, planet.distance, 0, Math.PI * 2);
    ctx.stroke();

    // Planeta
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, planet.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(render);
}

// Inicializa o renderizador
render();
