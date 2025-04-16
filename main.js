// Example typing effect
const quotes = [
  "Crafting Android apps with precision...",
  "Lover of clean code and Material Design...",
  "Jetpack Compose is my playground..."
];

let currentIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeQuote() {
  if (charIndex < quotes[currentIndex].length) {
    typingText.textContent += quotes[currentIndex][charIndex++];
    setTimeout(typeQuote, 60);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      charIndex = 0;
      currentIndex = (currentIndex + 1) % quotes.length;
      typeQuote();
    }, 2500);
  }
}

typeQuote();
