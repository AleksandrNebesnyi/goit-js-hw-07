const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const h1El = document.querySelector("h1");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputEl.value === "") {
    outputEl.textContent = "незнакомец";
  } else outputEl.textContent = event.target.value;
}
