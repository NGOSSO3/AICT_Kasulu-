const themeButton = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeButton.textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', theme);
}

setTheme(localStorage.getItem('theme') || 'light');

themeButton.addEventListener('click', function () {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});
