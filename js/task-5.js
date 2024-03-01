function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyColor = document.body;
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");


changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});