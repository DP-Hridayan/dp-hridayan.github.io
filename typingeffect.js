const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const body = document.body;
        
        const setTheme = () => {
            if (mediaQuery.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        };
        
        mediaQuery.addEventListener('change', setTheme);
        setTheme();

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
