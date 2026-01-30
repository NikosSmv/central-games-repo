const buttons = document.querySelectorAll("[data-choice]");
const result = document.getElementById("result");

const pScoreEl = document.getElementById("pScore");
const cScoreEl = document.getElementById("cScore");
const resetBtn = document.getElementById("reset");

const choices = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;

function playRound(player) {
  const computer = choices[Math.floor(Math.random() * 3)];
 let message = `Εσύ: ${player} | Υπολογιστής: ${computer} → `;

  if (player === computer) {
    message += "🤝 Ισοπαλία";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    pScore++;
    message += "✅ Νίκη!";
  } else {
    cScore++;
    message += "❌ Ήττα!";
  }

  pScoreEl.textContent = pScore;
  cScoreEl.textContent = cScore;
  result.textContent = message;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

resetBtn.addEventListener("click", () => {
  pScore = 0;
  cScore = 0;
  pScoreEl.textContent = "0";
  cScoreEl.textContent = "0";
  result.textContent = "Έγινε reset ✅";
});