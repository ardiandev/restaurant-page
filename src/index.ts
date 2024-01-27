import chicken from "./assets/images/chicken.jpg";
import alien from "./assets/icons/alien.png";
import "./index.scss";
import { header } from "./components/layout/header";
import { home } from "./components/pages/home";
import { footer } from "./components/layout/footer";
import { menu } from "./components/pages/menu";

const body = document.querySelector("body")! as HTMLBodyElement;
const mainEl = document.querySelector("#app")! as HTMLElement;
const headerEl: HTMLElement = header();
const footerEl: HTMLElement = footer();
const menuEl: HTMLDivElement = menu();
body.prepend(headerEl);
mainEl.appendChild(home());
mainEl.appendChild(menuEl);
body.appendChild(footerEl);

// const AppEl = document.querySelector("#app")! as HTMLDivElement;
// const headerEl = document.createElement("header")! as HTMLElement;
// const myImg = document.createElement("img")! as HTMLImageElement;
// const myIcon = document.createElement("img")! as HTMLImageElement;
// myImg.src = chicken;
// myIcon.src = alien;
// headerEl.textContent = "Hello Wordl";

// AppEl.appendChild(headerEl);
// AppEl.appendChild(myImg);
// AppEl.appendChild(myIcon);
