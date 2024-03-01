function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divContainer: document.querySelector("#boxes"),
}

refs.btnCreate.addEventListener ("click", onCreateClick);
refs.btnDestroy.addEventListener ("click", onDestroyClick);

function onCreateClick() {
  const amount = refs.input.value;
  destroyBoxes();

  if (amount < 1 || amount > 100) {
    return alert("Введіть число від 1 до 100");
  }

  createBoxes(amount);

  refs.input.value = "";  
}

function createBoxes(amount){
const divArr = [];

  for (let i = 0; i < amount; i += 1){
    let div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
  }
  refs.divContainer.append(...divArr);
}

function onDestroyClick(){
  destroyBoxes();
}

function destroyBoxes(){
  refs.divContainer.innerHTML = "";
}