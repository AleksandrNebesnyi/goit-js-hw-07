const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const h1El = document.querySelector("h1");
console.log(h1El);
console.log(inputEl);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputEl.value === "") {
    h1El.textContent = "незнакомец";
    // outputEl.textContent = "незнакомец";
  } else outputEl.textContent = event.target.value;
}
