
function toggleTheme() {
  let theme = localStorage.getItem("theme") || "dark-theme";

  if (theme === "dark-theme") {
    theme = "light-theme";
  } else {
    theme = "dark-theme";
  }

  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  document.body.classList.remove("dark-theme", "light-theme");
  document.body.classList.add(theme);
}

document.addEventListener("DOMContentLoaded", function () {
  let theme = localStorage.getItem("theme");
  if (theme) {
    applyTheme(theme);
  }
});
