import sheet from "./navBar.css" with { type: "css" };

export class NavBar extends HTMLElement {
  constructor(navItems) {
    super();
    this.navItems = navItems;
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    const current = this.getAttribute("current");
    const relative = this.getAttribute("relative") || ".";

    // Create spans
    const wrapper = document.createElement("ul");
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
