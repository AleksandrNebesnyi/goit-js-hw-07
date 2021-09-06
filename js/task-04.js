const refs = {
  decrementCounterButton: document.querySelector('[data-action="decrement"]'),
  incrementCounterButton: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementCounterButton.addEventListener("click", onDekrementCounterValue);
refs.incrementCounterButton.addEventListener("click", onIncrementCounterValue);

function onDekrementCounterValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementCounterValue() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
