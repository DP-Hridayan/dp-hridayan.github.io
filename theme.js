document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    setTheme(saved || (mediaQuery.matches ? 'light' : 'dark'));
  };

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const nextTheme = current === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });

  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'light' : 'dark');
    }
  });

  initTheme();
});
