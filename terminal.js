const text = "whoami";
const speed = 120;
let index = 0;

const typedText = document.getElementById("typed-text");
const terminal = document.getElementById("terminal");
const profile = document.querySelector(".profile-card");

function typeEffect() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            terminal.style.display = "none";
            profile.classList.remove("hidden");
        }, 1000);
    }
}

window.onload = typeEffect;
