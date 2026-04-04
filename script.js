(function () {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");

  function paintRootBg(theme) {
    root.style.backgroundColor = theme === "dark" ? "#1e1e1e" : "#fafafa";
  }

  function setTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
    paintRootBg(theme);
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    setTheme("dark");
  } else if (savedTheme === "light") {
    setTheme("light");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  if (button) {
    button.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "light" : "dark");
    });
  }
})();
