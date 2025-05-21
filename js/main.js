// Carrusel de imágenes con frases románticas
const images = [
  { src: "assets/img/pareja1.jpg", caption: "Cada segundo contigo es mi momento favorito." },
  { src: "assets/img/pareja2.jpg", caption: "Contigo la vida es más bonita." },
  { src: "assets/img/pareja3.jpg", caption: "7 meses... y contando hacia siempre." }
];

let currentImage = 0;

function updateCarousel() {
  const img = document.getElementById("carousel-image");
  const caption = document.getElementById("carousel-caption");

  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[currentImage].src;
    caption.innerText = images[currentImage].caption;
    img.style.opacity = 1;
  }, 400);

  currentImage = (currentImage + 1) % images.length;
}

// Iniciar carrusel automático
setInterval(updateCarousel, 5000);
window.onload = updateCarousel;

// Sonido del corazón
const heartAudio = new Audio("assets/audio/latido.mp3");
heartAudio.loop = true;
heartAudio.volume = 0.2;

window.addEventListener("load", () => {
  const heart = document.querySelector(".heart-pulse");
  if (heart) {
    heart.addEventListener("click", () => {
      if (heartAudio.paused) {
        heartAudio.play();
      } else {
        heartAudio.pause();
      }
    });
  }
});

function showLoveLoader(redirectUrl) {
  const loader = document.getElementById('love-loader');
  const heartsBar = document.getElementById('hearts-bar');
  const percent = document.getElementById('love-percent');
  loader.classList.add('active');
  let total = 60;
  let current = 0;
  heartsBar.innerHTML = '';
  percent.textContent = '0%';

  function animateHearts() {
    if (current < total) {
      const heart = document.createElement('span');
      heart.className = 'heart-anim';
      heart.innerHTML = '❤️';
      heartsBar.appendChild(heart);
      percent.textContent = Math.round(((current + 1) / total) * 100) + '%';
      current++;
      setTimeout(animateHearts, 250);
    } else {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 600);
    }
  }
  animateHearts();
}

window.addEventListener("DOMContentLoaded", () => {
  const cartaBtn = document.querySelector('a[href="login.html"]');
  if (cartaBtn) {
    cartaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showLoveLoader("carta.html");
    });
  }
});

<div id="love-loader" class="fixed inset-0 flex flex-col items-center justify-center bg-pink-50 bg-opacity-95 z-[9999] transition-opacity duration-500 opacity-0 pointer-events-none">
</div>
