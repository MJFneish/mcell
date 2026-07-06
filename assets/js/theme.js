(function () {
  var STORAGE_KEY = "mcell-theme";
  var THEME_COLOR = { light: "#144e5d", dark: "#0b1a1f" };
  var FAVICON = { light: "favicon.ico", dark: "favicon-dark.ico" };

  function getTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === "dark" ? "dark" : "light";
  }

  /** @param {"light"|"dark"} theme */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[theme]);

    var favicon = document.getElementById("favicon");
    if (favicon) favicon.setAttribute("href", FAVICON[theme]);

    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
  }

  /** @param {"light"|"dark"} theme */
  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  });

  applyTheme(getTheme());
})();
