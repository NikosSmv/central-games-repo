
document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  let timeLeft = 15;
  let timer = null;

  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");
  const highScoreEl = document.getElementById("highScore");
  const clickBtn = document.getElementById("clickBtn");
  const resetBtn = document.getElementById("resetBtn");

  let highScore = localStorage.getItem("highScore") || 0;
  highScoreEl.textContent = highScore;

  function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        timer = null;
        clickBtn.disabled = true;

        if (score > highScore) {
          highScore = score;
          localStorage.setItem("highScore", highScore);
          highScoreEl.textContent = highScore;
        }
      }
    }, 1000);
  }

  clickBtn.addEventListener("click", () => {
    startTimer();
    score++;
    scoreEl.textContent = score;
  });

  resetBtn.addEventListener("click", () => {
    score = 0;
    timeLeft = 15;
    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;
    clickBtn.disabled = false;
    clearInterval(timer);
    timer = null;
  });
});

