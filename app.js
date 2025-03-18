document.getElementById("surpriseBtn").addEventListener("click", function () {
    document.getElementById("surpriseMessage").style.display = "block";
});

// Generate confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        let randomX = Math.random() * window.innerWidth;
        let randomDelay = Math.random() * 5;

        confetti.style.left = randomX + "px";
        confetti.style.animationDelay = randomDelay + "s";
    }
}

createConfetti();