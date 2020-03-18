const template = document.createElement("template");
template.innerHTML = `
<style>
  h3 {
    color: coral;
  }
</style>

<div className="user-card">
  <img alt="Avatar"/>
  <div>
    <h3></h3>
    <div className="info">
      <p>Email:</p>
      <p>Phone:</p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const { shadowRoot } = this;
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    shadowRoot
      .getElementById("toggle-info")
      .addEventListener("click", () => console.log("test"));
  }
}

window.customElements.define("user-card", UserCard);
