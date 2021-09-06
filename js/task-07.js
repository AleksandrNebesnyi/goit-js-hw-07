const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize);
function onChangeFontSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
