import sheet from "./navBar.css" with { type: "css" };

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
