const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const listItemEL = [...ingredients].map(element => {
  const list_item = document.createElement("li");
  list_item.classList.add("item");
  list_item.textContent = element;
  return list_item;
});
list.append(...listItemEL);