const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const validationInputLength = inputEl.dataset.length;
  event.target.classList.add("invalid");
  if (validationInputLength == event.target.value.length) {
    event.target.classList.replace("invalid", "valid");
  }
}
