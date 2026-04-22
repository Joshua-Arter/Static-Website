//main.js

// Shopping list array with at least four grocery items.
const shoppingList = ["Milk", "Bread", "Eggs", "Butter"];

// Display all shopping items as <li> elements inside the <ul> tag.
function displayItems() {
  const ul = document.getElementById("itemList");
  ul.innerHTML = "";

  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

// Mark two default items as bought by changing their style.
function setDefaultChecked() {
  const ul = document.getElementById("itemList");
  const firstItem = ul.children[0];
  const thirdItem = ul.children[2];

  if (firstItem) {
    firstItem.style.textDecoration = "line-through";
  }

  if (thirdItem) {
    thirdItem.style.textDecoration = "line-through";
  }
}

displayItems();
setDefaultChecked();
