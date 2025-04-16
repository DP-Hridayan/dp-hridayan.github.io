const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

const setTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const initTheme = () => {
  const saved = localStorage.getItem('theme');
  setTheme(saved || (mediaQuery.matches ? 'light' : 'dark'));
};

themeToggle.addEventListener('click', () => {
  setTheme(body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});

mediaQuery.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'light' : 'dark');
  }
});

initTheme();
