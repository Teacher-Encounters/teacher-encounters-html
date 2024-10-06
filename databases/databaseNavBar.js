import { NavBar } from "../common/navBar.js";

const DATABASE_NAV_ITEMS = [
  {
    title: "Why?",
    href: "index.html",
  },
  {
    title: "What?",
    href: "terminology.html",
  },
  {
    title: "ERD",
    href: "erd.html",
  },
  {
    title: "Normalisation",
    href: "norm.html",
  },
  {
    title: "SQL",
    href: "sql.html",
  },
  {
    title: "SQLite",
    href: "sqlite.html",
  },
];

class DatabaseNavBar extends NavBar {
  constructor() {
    super(DATABASE_NAV_ITEMS);
  }
}

customElements.define("database-nav-bar", DatabaseNavBar);
