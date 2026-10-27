const text = document.getElementById("typing-text");

const phrases = [
    "FARRAR PROJECTS.",
    "CARPENTRY & LANDSCAPING.",
    "FREE QUOTE."
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
        // Type the next character
        text.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;

        // Finished typing → wait before deleting
        if (characterIndex === currentPhrase.length) {
            setTimeout(() => {
                deleting = true;
            }, 2000);
        }

    } else {
        // Delete the previous character
        text.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;

        // Finished deleting → move to next phrase
        if (characterIndex === 0) {
            deleting = false;
            phraseIndex++;

            // Start again from the first phrase
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }
        }
    }

    // Typing speed / deleting speed
    const speed = deleting ? 70 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();