const quotes = [
  "Just a guy who loves apps and design...",
  "Mastering jetpack compose bit by bit...",
  "Designing with Material You..."
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  const fullText = quotes[currentIndex];

  if (!isDeleting) {
    typingText.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === fullText.length) {
      isDeleting = true;
      return setTimeout(typeEffect, 1500);
    }
  } else {
    typingText.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % quotes.length;
      return setTimeout(typeEffect, 500);
    }
  }

  const delay = isDeleting ? 60 : 100;
  setTimeout(typeEffect, delay);
}

typeEffect();
