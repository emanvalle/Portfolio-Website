document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const darkToggle = document.getElementById("darkModeToggle");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Dark mode toggle
  function setDarkMode(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    darkToggle.textContent = isDark ? "☀️" : "🌙";
  }

  // Load saved theme
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    setDarkMode(true);
  }

  // Toggle on click
  darkToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
});
