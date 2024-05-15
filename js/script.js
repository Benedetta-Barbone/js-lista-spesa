

const shoppingList = ['Latte', 'Pollo', 'Fragole', 'Biscotti', 'Burro', 'Uova'];

let listElement = document.getElementById("shoppingList");

let i = 0;

while (i < shoppingList.length) {
      let itemElement = document.createElement("p");
      itemElement.textContent = shoppingList[i];
      listElement.appendChild(itemElement);
      i++;
}


  

  


