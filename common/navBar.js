class NavBar extends HTMLElement {
  constructor(navItems) {
    super();
    this.navItems = navItems;
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });
    const items = this.getAttribute("navItems");
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

    const style = document.createElement("style");
    style.textContent = `
ul {
width: 100%;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333;
}

li.currentNav {
	text-decoration: underline;
text-decoration-color: white;
}

li {
float: left;
}

li a {
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}

li a:hover:not(.active) {
background-color: #111;
}

.active {
background-color: #04AA6D;
}
		`;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

const ROOT_NAV_ITEMS = [
  {
    title: "Home",
    href: "index.html",
  },
  {
    title: "Networks",
    href: "networks/index.html",
  },
  {
    title: "A Level",
    href: "a-level/index.html",
  },
  {
    title: "Industry Profiles",
    href: "industry-profiles/",
  },
  {
    title: "Software Development Lifecycle",
    href: "industry-profiles/software-dev-lifecycle.html",
  },
  {
    title: "Team Structure",
    href: "industry-profiles/team-structure.html",
  },
];

class RootNavBar extends NavBar {
  constructor() {
    super(ROOT_NAV_ITEMS);
  }
}

customElements.define("root-nav-bar", RootNavBar);

const NETWORK_NAV_ITEMS = [
  {
    title: "LAN",
    href: "building-simple-lan.html",
  },
  {
    title: "DHCP",
    href: "setting-up-dhcp.html",
  },
  {
    title: "Email",
    href: "setting-up-email.html",
  },
  {
    title: "Web Server",
    href: "setting-up-web-server.html",
  },
  {
    title: "Routing",
    href: "using-routing-connect-two-lans.html",
  },
];

class NetworkNavBar extends NavBar {
  constructor() {
    super(NETWORK_NAV_ITEMS);
  }
}

customElements.define("network-nav-bar", NetworkNavBar);
