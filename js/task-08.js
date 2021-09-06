const refs = {
  boxesEl: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
};

function createBoxes(amount) {
  const width = 30;
  const height = 30;
  let step = 10;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    // element.style.border = `1px solid lightgray`;
    element.style.background = `#${Math.round(Math.random() * 1000)}`;
    if (i > 0) {
      element.style.width = `${width + step}px`;
      element.style.height = `${height + step}px`;
      step += 10;
    }
    elements.push(element);
  }
  refs.boxesEl.append(...elements);
}

refs.btnRender.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.btnDestroy.addEventListener("click", () => {
  console.log(refs.boxesEl);
  refs.boxesEl.remove();
});
