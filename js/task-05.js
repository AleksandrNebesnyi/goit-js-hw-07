const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInputChange);

inputEl.addEventListener("input", (event) => {
  utputEl.textContent =
    event.target.value === "" ? "незнакомец" : event.target.value;
});

// function onInputChange(event) {
//   if ((outputEl.textContent = "")) {
//     outputEl.textContent = "незнакомец";
//   } else outputEl.textContent = event.target.value;
// }
