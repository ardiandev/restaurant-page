import "../../styles/contact.scss";

const contact = (): HTMLDivElement => {
  const contactEl: HTMLDivElement = document.createElement("div");
  contactEl.classList.add("container", "contact");

  contactEl.innerHTML = `<h2>Contact</h2>
    <p>Please order and contact us on 282374xxx</p>
  `;

  return contactEl;
};

export { contact };
