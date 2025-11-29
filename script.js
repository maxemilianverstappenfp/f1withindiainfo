// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Simple fake "next GP" data just for demo
const nextGp = {
  name: "Sample Night Grand Prix",
  detail: "13 July 2025 • Street Circuit",
  round: 12,
  utcStart: "18:00", // 18:00 UTC
};

const nextNameEl = document.getElementById("next-gp-name");
const nextDetailEl = document.getElementById("next-gp-detail");
const nextRoundEl = document.getElementById("next-gp-round");
const nextIstEl = document.getElementById("next-gp-ist");
const nextCountdownEl = document.getElementById("next-gp-countdown");

if (
  nextNameEl &&
  nextDetailEl &&
  nextRoundEl &&
  nextIstEl &&
  nextCountdownEl
) {
  nextNameEl.textContent = nextGp.name;
  nextDetailEl.textContent = nextGp.detail;
  nextRoundEl.textContent = `#${nextGp.round}`;

  // Convert fixed UTC time to IST (+5:30)
  const [utcHour, utcMin] = nextGp.utcStart.split(":").map(Number);
  let istHour = utcHour + 5;
  let istMin = utcMin + 30;
  if (istMin >= 60) {
    istMin -= 60;
    istHour += 1;
  }
  if (istHour >= 24) {
    istHour -= 24;
  }
  const pad = (n) => String(n).padStart(2, "0");
  nextIstEl.textContent = `${pad(istHour)}:${pad(istMin)} IST`;

  // Dummy countdown just for showing dynamic text
  nextCountdownEl.textContent = "≈ few days to lights out";
}

// UTC → IST converter for India section
const utcInput = document.getElementById("utc-input");
const convertBtn = document.getElementById("convert-btn");
const istOutput = document.getElementById("ist-output");

if (utcInput && convertBtn && istOutput) {
  convertBtn.addEventListener("click", () => {
    const value = utcInput.value;
    if (!value) {
      istOutput.textContent = "Please enter a valid UTC time.";
      return;
    }
    const [h, m] = value.split(":").map(Number);
    if (Number.isNaN(h) || Number.isNaN(m)) {
      istOutput.textContent = "Please enter a valid UTC time.";
      return;
    }
    let hour = h + 5;
    let min = m + 30;
    if (min >= 60) {
      min -= 60;
      hour += 1;
    }
    if (hour >= 24) {
      hour -= 24;
    }
    const pad = (n) => String(n).padStart(2, "0");
    istOutput.textContent = `Equivalent IST start: ${pad(hour)}:${pad(
      min
    )} IST`;
  });
}
