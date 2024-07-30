const storedTheme = localStorage.getItem("theme");

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "light";
};

const setTheme = function (theme) {
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }
};

setTheme(getPreferredTheme());
