const buttons = document.querySelectorAll("[data-choice]");
const result = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const player = btn.dataset.choice;
    const computer = choices[Math.floor(Math.random() * 3)];

    let message = `Εσύ: ${player} | Υπολογιστής: ${computer}. `;

    if (player === computer) message += "Ισοπαλία 🤝";
    else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) message += "Κέρδισες 🎉";
    else message += "Έχασες 😢";

    result.textContent = message;
  });
});