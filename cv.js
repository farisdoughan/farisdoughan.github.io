(function () {
  var tabs = document.querySelectorAll(".cv-bubble");
  var panels = document.querySelectorAll(".cv-panel");
  if (!tabs.length || !panels.length) return;

  function activate(id) {
    tabs.forEach(function (btn) {
      var isOn = btn.getAttribute("data-panel") === id;
      btn.classList.toggle("is-active", isOn);
      btn.setAttribute("aria-selected", isOn ? "true" : "false");
    });
    panels.forEach(function (panel) {
      var isOn = panel.id === "cv-panel-" + id;
      panel.classList.toggle("is-active", isOn);
      panel.hidden = !isOn;
    });
  }

  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activate(btn.getAttribute("data-panel"));
    });
  });

  var initial = document.querySelector(".cv-bubble.is-active");
  if (initial) activate(initial.getAttribute("data-panel"));
})();
