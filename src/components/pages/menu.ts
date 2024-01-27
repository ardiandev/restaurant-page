import "../../styles/menu.scss";
import pizza from "../../assets/images/pizza.jpg";
import friedChiken from "../../assets/images/fried-chicken.jpg";
import rendang from "../../assets/images/rendang.jpg";
import steak from "../../assets/images/steak.jpg";
import taco from "../../assets/images/sushi.jpg";
import sushi from "../../assets/images/taco.jpg";

const menu = (): HTMLDivElement => {
  const menuEl: HTMLDivElement = document.createElement("div");
  menuEl.classList.add("container", "menu");
  menuEl.appendChild(foodLists());
  return menuEl;
};

const foodDatabase = [
  {
    name: "Fried Chicken",
    price: "$10",
    ingredient: "chicken, onion, sausage",
    image: friedChiken
  },
  {
    name: "Pizza",
    price: "$12",
    ingredient: "flour, tomato sauce, cheese",
    image: pizza
  },
  {
    name: "Rendang",
    price: "$15",
    ingredient: "beef, coconut milk, spices",
    image: rendang
  },
  {
    name: "Steak",
    price: "$13",
    ingredient: "beef, beef broth, spices",
    image: steak
  },
  {
    name: "Sushi",
    price: "$11",
    ingredient: "beef, black nuts, spices",
    image: sushi
  },
  {
    name: "Taco",
    price: "$9",
    ingredient: "young jackfruit, coconut milk, spices",
    image: taco
  }
];

const foodLists = (): HTMLDivElement => {
  const foodEl: HTMLDivElement = document.createElement("div");
  foodEl.classList.add("food-items");
  let cardFoods = "";

  foodDatabase.forEach(({ name, price, ingredient, image }, index) => {
    cardFoods += `  
    <div class="card item-${index}" >
      <div class="image-container">  
        <img src="${image}" />
      </div>
      <div class="card-container">
        <h3 class="food-name">${name}</h3>
        <p class="food-price">Price: ${price}</p>
        <p class="food-ingredients">Ingredients: ${ingredient}</p>
      </div>
    </div>`;
  });

  foodEl.innerHTML = cardFoods;
  return foodEl;
};

export { menu };
