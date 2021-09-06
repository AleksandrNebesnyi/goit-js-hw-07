const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  // if (Number(inputEl.dataset.length) !== inputEl.value.length) {
  //   inputEl.classList.add("invalid");
  // }
  // inputEl.classList.add("valid");

  Number(inputEl.dataset.length) !== inputEl.value.length
    ? inputEl.classList.add("invalid")
    : inputEl.classList.add("valid");
}
