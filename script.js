// 🎶 Música
const song = document.getElementById('birthday-song');
document.body.addEventListener('click', () => {
    song.play().catch(() => {});
}, { once: true });

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

const message = `Mi amor ❤️

No hay palabras suficientes
para decirte lo importante que eres para mí.

Cada día contigo es un regalo,
cada sonrisa tuya, mi lugar seguro.

Gracias por existir,
gracias por quedarte.

Feliz cumpleaños 🤍`;

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
