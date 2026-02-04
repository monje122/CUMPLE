
// 💕 Corazones cayendo
function createHearts() {
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-fall';
        heart.innerHTML = '❤';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 10 + 12) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }
}

setInterval(createHearts, 8000);
createHearts();

// 💌 Carta con escritura automática
const envelope = document.getElementById('envelope');
const letterText = document.getElementById('letter-text');

const message = `Feliz San Valentín, mi amor 🤍

Desde que llegaste a mi vida, todo cambió de la forma más bonita.
Aprendí que el amor no solo se dice, se siente…
en cada mirada, en cada risa compartida, en cada momento a tu lado.

Gracias por ser mi lugar seguro,
mi calma en los días difíciles
y mi sonrisa en los días felices.

Hoy y siempre, te elijo a ti.
Porque contigo, el amor no es una promesa:
es una realidad que vivo cada día.

Te amo más de lo que las palabras pueden explicar. ❤️`;

let index = 0;
let opened = false;

envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;

    envelope.classList.add('open');

    const typing = setInterval(() => {
        letterText.textContent += message[index];
        index++;
        if (index >= message.length) clearInterval(typing);
    }, 45);
});
const photos = document.querySelectorAll('.photo-slider img');
let currentPhoto = 0;

setInterval(() => {
    photos[currentPhoto].classList.remove('active');
    currentPhoto = (currentPhoto + 1) % photos.length;
    photos[currentPhoto].classList.add('active');
}, 3000); // cambia cada 4 segundos

const correctCode = "180126"; // ❤️ TU CÓDIGO SECRETO
const digits = document.querySelectorAll('.digit');
const unlockBtn = document.getElementById('unlockBtn');
const lockScreen = document.getElementById('lockScreen');
const mainContent = document.getElementById('mainContent');

// girar números
digits.forEach(digit => {
  digit.addEventListener('click', () => {
    let num = parseInt(digit.textContent);
    num = (num + 1) % 10;
    digit.textContent = num;
  });
});

function getCurrentCode() {
  return Array.from(digits).map(d => d.textContent).join('');
}

// explosión de corazones
function heartExplosion() {
  for (let i = 0; i < 120; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'fixed';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = Math.random() * 20 + 14 + 'px';
    heart.style.color = '#d62828';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '10000';

    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 400;

    heart.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translate(${x}px, ${y}px)`;
      heart.style.opacity = '0';
    });

    setTimeout(() => heart.remove(), 1500);
  }
}

unlockBtn.addEventListener('click', () => {
  if (getCurrentCode() === correctCode) {
     heartExplosion();
      // 🎶 INICIAR MÚSICA
    bgMusic.play().catch(() => {});
    setTimeout(() => {
      lockScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, 1200);
  } else {
    digits.forEach(d => d.style.color = '#ff0000');
    setTimeout(() => digits.forEach(d => d.style.color = '#ff6b81'), 600);
  }
});
let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const videoBox = document.getElementById('videoBox');
const questionsBox = document.getElementById('questionsBox');

function answerQuestion() {
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;

    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add('active');
    } else {
        questionsBox.style.display = 'none';
        videoBox.classList.remove('hidden');
    }
}
const bgMusic = document.getElementById('bgMusic');
const loveVideo = document.getElementById('loveVideo');

// Cuando el video empieza → apagar música
loveVideo.addEventListener('play', () => {
    if (bgMusic && !bgMusic.paused) {
        bgMusic.pause();
    }
});
