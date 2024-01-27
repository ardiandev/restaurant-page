const footer = () => {
  const footerEl = document.createElement("footer") as HTMLElement;
  const footerContainer: HTMLDivElement = document.createElement("div");
  footerContainer.classList.add("container", "footer");
  footerContainer.innerHTML = `<p>Coded and Designed by <a href="#" >Ardian Pradana</a></p>`;
  footerEl.appendChild(footerContainer);
  return footerEl;
};

export { footer };
