import NavBar from "../common/navBar.js";

const PROGRAMMING_NAV_ITEMS = [
  {
    title: "Introduction",
    href: "index.html",
  },
  {
    title: "Physics",
    href: "physics/index.html",
  },
  {
    title: "Simple Harmonic Motion",
    href: "simple-harmonic-motion/index.html",
  },
  {
    title: "Modify and Play",
    href: "modify-and-play/index.html",
  },
  {
    title: "OOP - Asteroids",
    href: "asteroids/index.html",
  },
];

class ProgrammingNavBar extends NavBar {
  constructor() {
    super(PROGRAMMING_NAV_ITEMS);
  }
}

customElements.define("programming-nav-bar", ProgrammingNavBar);
