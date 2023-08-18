const darkModeBtn = document.getElementById("dark-mode");
const lightModeBtn = document.getElementById("light-mode");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.add("dark-mode");
});

lightModeBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
});
