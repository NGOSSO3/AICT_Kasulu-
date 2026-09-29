const slides = [
  'images/choir2.jpg',
  'images/choir3.jpg',
  'images/choir5.jpg'
];

const heroImage = document.getElementById('heroImage');
const dotsBox = document.getElementById('dots');
const slideCount = document.getElementById('slideCount');
const slideProgress = document.getElementById('slideProgress');

let current = 0;
let timer;

slides.forEach(function (_, i) {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.setAttribute('aria-label', 'Picha ' + (i + 1));
  dot.addEventListener('click', function () {
    showSlide(i);
    restartTimer();
  });
  dotsBox.appendChild(dot);
});

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  heroImage.style.backgroundImage = 'url("' + slides[current] + '")';
  slideCount.textContent = '0' + (current + 1) + ' / 0' + slides.length;
  slideProgress.style.width = ((current + 1) / slides.length) * 100 + '%';

  document.querySelectorAll('.dot').forEach(function (dot, i) {
    dot.classList.toggle('active', i === current);
  });
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    showSlide(current + 1);
  }, 6000);
}

document.getElementById('prevSlide').addEventListener('click', function () {
  showSlide(current - 1);
  restartTimer();
});

document.getElementById('nextSlide').addEventListener('click', function () {
  showSlide(current + 1);
  restartTimer();
});

showSlide(0);
restartTimer();
