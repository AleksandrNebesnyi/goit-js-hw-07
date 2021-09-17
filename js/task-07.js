const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize);

const defaultFonSize = `${inputEl.value}px`;
textEl.style.fontSize = defaultFonSize;

function onChangeFontSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
