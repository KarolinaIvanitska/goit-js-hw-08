
const userNameEl = document.querySelector("#name-input");
const spanId = document.querySelector("#name-output")


userNameEl.addEventListener("input", onUserNameInput);

function onUserNameInput(){
    const userName = userNameEl.value.trim() || "Anonymous";
    spanId.textContent = userName;
}