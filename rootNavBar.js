import NavBar from "./common/navBar.js";

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
    title: "Programming",
    href: "programming/index.html",
  },
  {
    title: "Databases",
    href: "databases/index.html",
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
    super(ROOT_NAV_ITEMS, true);
  }
}

customElements.define("root-nav-bar", RootNavBar);
