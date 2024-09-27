import { NavBar } from "../common/navBar.js";

const NETWORK_NAV_ITEMS = [
  {
    title: "Concepts",
    href: "index.html",
  },
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
