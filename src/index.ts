import chicken from "./assets/images/chicken.jpg";
import alien from "./assets/icons/alien.png";
import "./index.scss";
import { header } from "./components/layout/header";
import { home } from "./components/pages/home";
import { footer } from "./components/layout/footer";
import { menu } from "./components/pages/menu";
import { contact } from "./components/pages/contact";

const body = document.querySelector("body")! as HTMLBodyElement;
const mainEl = document.querySelector("#app")! as HTMLElement;
const headerEl: HTMLElement = header();
const footerEl: HTMLElement = footer();
const homeEl: HTMLElement = home();
const menuEl: HTMLDivElement = menu();
const contactEl: HTMLDivElement = contact();
body.prepend(headerEl);

const navMenu = document.querySelector(".nav-menu") as HTMLElement;

const handleMenu = (event: MouseEvent) => {
  handleMenuColor();
  const navItem = event.target as HTMLElement;
  let navLi = (event.target as HTMLElement).textContent;
  mainEl.innerHTML = "";
  const divs = document.querySelectorAll(".container");
  divs.forEach(div => {
    div.classList.remove("active");
  });

  if (navLi === "Menu") {
    mainEl.appendChild(menuEl);
    menuEl.classList.add("active");
    navItem.classList.add("menu-active");
  } else if (navLi === "Contact") {
    mainEl.appendChild(contactEl);
    contactEl.classList.add("active");
    navItem.classList.add("menu-active");
  } else {
    mainEl.appendChild(homeEl);
    homeEl.classList.add("active");
    navItem.classList.add("menu-active");
  }
};

navMenu.addEventListener("click", handleMenu);

mainEl.appendChild(home());
mainEl.appendChild(contactEl);
body.appendChild(footerEl);

const handleMenuColor = () => {
  const menuItems = document.querySelectorAll("ul li");
  menuItems.forEach(li => li.classList.remove("menu-active"));
};
