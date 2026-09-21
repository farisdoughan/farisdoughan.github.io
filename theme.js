(function () {
  var root = document.documentElement;

  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    root.style.backgroundColor = theme === "dark" ? "#14141a" : "#ffffff";
    localStorage.setItem("theme", theme);
  }

  var btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "light" : "dark");
    });
  }
})();
