const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('open');
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});

const sections = document.querySelectorAll('main section[id]');

function highlightNav() {
  let currentId = 'home';
  const scrollPos = window.scrollY + 120;

  sections.forEach(function (section) {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  if (currentId === 'about-details') currentId = 'about';
  if (currentId === 'services') currentId = 'about';

  navLinks.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
}

window.addEventListener('scroll', highlightNav);
highlightNav();

document.querySelectorAll('.copy-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    navigator.clipboard.writeText(button.dataset.copy);
    button.textContent = '✓';
    setTimeout(function () {
      button.textContent = '⧉';
    }, 1500);
  });
});

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const lang = document.documentElement.lang;
  status.textContent = lang === 'en'
    ? 'Thank you! Your message has been received.'
    : 'Asante! Ujumbe wako umepokelewa.';
  form.reset();
});
