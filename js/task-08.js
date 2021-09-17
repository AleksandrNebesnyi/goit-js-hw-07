const refs = {
  boxesEl: document.querySelector("#boxes"),
  input: document.querySelector('[type="number"]'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
};

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let step = 10;

  if (refs.boxesEl.childElementCount > 0) {
    width = refs.boxesEl.lastChild.clientWidth + step;
    height = refs.boxesEl.lastChild.clientHeight + step;
  }

  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.background = `#${Math.round(Math.random() * 1000)}`;
    if (i > 0) {
      element.style.width = `${width + step}px`;
      element.style.height = `${height + step}px`;
      step += 10;
    }
    elements.push(element);
  }
  refs.boxesEl.append(...elements);
  refs.input.value = "";
}

refs.btnRender.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.btnDestroy.addEventListener("click", () => {
  console.log(refs.boxesEl);
  refs.boxesEl.remove();
});
