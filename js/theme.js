function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

function toggleTheme() {
  let theme = localStorage.getItem("theme") || "dark-theme";
  theme = (theme === "dark-theme") ? "light-theme" : "dark-theme";

  setTheme(theme);
  window.parent.postMessage({"theme": theme}, "*");
}

function listenToggle() {
  window.addEventListener("message", function(event) {
    if (event.data.theme) {
      setTheme(event.data.theme)
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTheme(localStorage.getItem("theme") || "dark-theme");
});
