// 1. Contador de Tempo
// Ajuste a data abaixo para o momento em que o amor começou!
const startDate = new Date("2026-04-03T00:00:00"); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerText = 
        `${days} dias ${hours.toString().padStart(2, '0')} horas ${minutes.toString().padStart(2, '0')} minutos ${seconds.toString().padStart(2, '0')} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Chama uma vez logo de cara

// 2. Animação de Pétalas Caindo
const container = document.getElementById('petals-container');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Configurações aleatórias para cada pétala
    const size = (Math.random() * 10 + 8) + "px";
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + "vw"; // Nasce em qualquer lugar da largura
    
    const duration = Math.random() * 5 + 4; // Entre 4 e 9 segundos para cair
    petal.style.animationDuration = duration + "s";
    petal.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(petal);

    // Remove do DOM após cair para economizar memória
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Cria uma pétala nova a cada 200 milissegundos
setInterval(createPetal, 200);