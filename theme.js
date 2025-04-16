document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: light)");

  const apply = isLight => {
    root.setAttribute("data-theme", isLight ? "light" : "dark");
  };

  apply(mq.matches);
  mq.addEventListener("change", e => apply(e.matches));
});
