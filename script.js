// Dark mode toggle
const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleDark.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Menu toggle (mobile)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Optional: Hide menu on link click (mobile UX)
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('active'));
});
