const refItems = document.querySelectorAll(".item");
console.log(`В списке ${refItems.length} категории.`);

const items = refItems;
console.log(items);
items.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Категория ${itemTitle}`);
  const itemAmount = item.querySelectorAll("li").length;
  console.log(`Количество элементов: ${itemAmount}`);
});
