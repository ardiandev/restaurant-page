import chicken from "../../assets/images/chef.png";

const home = () => {
  const homeEl = document.createElement("div");
  homeEl.classList.add("container", "home");
  const heroEl = hero();
  const imageHome = homeImg();
  // homeEl.innerHTML = `<h1>Welcome to Laris Restaurant</h1>`;
  homeEl.appendChild(heroEl);
  homeEl.appendChild(imageHome);

  return homeEl;
};

const hero = (): HTMLDivElement => {
  const heroEl = document.createElement("div")! as HTMLDivElement;
  heroEl.classList.add("hero-heading-container");
  heroEl.innerHTML = `<h2 class="hero-heading" >Enjoy Our Delicious Meal</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
  
  `;

  heroEl.appendChild(orderBtn());
  return heroEl;
};

const homeImg = (): HTMLDivElement => {
  const heroImgBanner = document.createElement("div") as HTMLDivElement;
  heroImgBanner.classList.add("hero-image-container");
  const heroImgEl = document.createElement("img");

  heroImgEl.src = chicken;
  heroImgBanner.appendChild(heroImgEl);

  return heroImgBanner;
};

const orderBtn = (): HTMLButtonElement => {
  const orderBtnEl = document.createElement("button") as HTMLButtonElement;
  orderBtnEl.classList.add("order-btn");
  orderBtnEl.textContent = "ORDER NOW";

  return orderBtnEl;
};

export { home };
