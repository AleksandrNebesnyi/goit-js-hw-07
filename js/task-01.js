const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории.`);

const items = itemsEl;
console.log(items);
items.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Категория ${itemTitle}`);
  const itemAmount = item.querySelectorAll("li").length;
  console.log(`Количество элементов: ${itemAmount}`);
});
