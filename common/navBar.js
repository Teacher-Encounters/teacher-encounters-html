//import sheet from "./navBar.css" with { type: "css" };
const sheet = new CSSStyleSheet();

sheet.replaceSync(`
ul {
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  background-color: #666;
  padding: 0.5em 1em;
  color: white;
  display: flex;
  flex-direction: row;
}

ul.rootNav {
  background-color: #333;
}

@media screen and (max-width: 480px) {
  ul {
    flex-direction: column;
  }
}

li.currentNav {
  text-decoration: underline;
  text-decoration-color: black;
  background-color: white;
  color: black;
}

li a {
  color: inherit;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:not(.currentNav) a:hover {
  background-color: #000;
}
`)

export default class NavBar extends HTMLElement {
  constructor(navItems, isRoot = false) {
    super();
    this.navItems = navItems;
    this.isRoot = isRoot
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    const current = this.getAttribute("current");
    const relative = this.getAttribute("relative") || ".";

    // Create spans
    const wrapper = document.createElement("ul");
    if (this.isRoot) {
      wrapper.classList.add("rootNav")
    }
    for (const navItem of this.navItems) {
      const li = document.createElement("li");
      if (current === navItem.title) {
        li.classList.add("currentNav");
      }
      const anchor = document.createElement("a");
      anchor.innerText = navItem.title;
      anchor.setAttribute("href", relative + navItem.href);
      li.appendChild(anchor);
      wrapper.appendChild(li);
    }

    shadow.adoptedStyleSheets = [sheet];
    shadow.appendChild(wrapper);
  }
}
