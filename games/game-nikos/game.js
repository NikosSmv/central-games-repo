const buttons = document.querySelectorAll("[data-choice]");
const result = document.getElementById("result");

const pScoreEl = document.getElementById("pScore");
const cScoreEl = document.getElementById("cScore");
const resetBtn = document.getElementById("reset");

const choices = ["rock", "paper", "scissors"];
let pScore = 0;
let cScore = 0;
let gameOver = false;

function computerPick() {
  return choices[Math.floor(Math.random() * 3)];
}

function updateScore() {
  pScoreEl.textContent = String(pScore);
  cScoreEl.textContent = String(cScore);
}

function endIfNeeded() {
  if (pScore >= 3) {
    gameOver = true;
    result.textContent = "🏆 Τέλος! Κέρδισες το best-of-3!";
  } else if (cScore >= 3) {
    gameOver = true;
    result.textContent = "💀 Τέλος! Έχασες στο best-of-3.";
  }
}

function playRound(player) {
  if (gameOver) return;

  const computer = computerPick();
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

  updateScore();
  result.textContent = message;
  endIfNeeded();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

resetBtn.addEventListener("click", () => {
  pScore = 0;
  cScore = 0;
  gameOver = false;
  updateScore();
  result.textContent = "Έγινε reset ✅ Παίξε ξανά!";
});