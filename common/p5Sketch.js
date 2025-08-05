export default class P5Sketch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const pre = document.createElement('pre');
    this.code = document.createElement('code');
    this.code.classList.add('language-js');

    // Get styles
    const prismStyle = document.createElement('link');
    prismStyle.setAttribute('rel', 'stylesheet');
    prismStyle.setAttribute('href', '/css/prism.css');

    // Get prism lib
    const prismScript = document.createElement('script');
    prismScript.src = '/lib/prism.js';
    prismScript.onload = () => this.renderCode();

    shadow.appendChild(prismStyle);
    shadow.appendChild(prismScript);
    shadow.appendChild(pre);
    pre.appendChild(this.code);

    this.shadow = shadow;
  }

  renderCode() {
    const source = this.getAttribute("src");
    const containerId = this.getAttribute('containerId');

    const scriptTag = document.createElement('script');
    scriptTag.src = source;
    scriptTag.setAttribute('type', 'module');
    this.shadow.appendChild(scriptTag);

    // Load the p5 JS file and run it
    fetch(source)
      .then(r => r.text())
      .then((r) => {
        this.code.innerHTML = r;

        // Prism highlight
        if (window.Prism) {
          Prism.highlightElement(this.code);
        }
        if (!containerId) return;

        const container = document.getElementById(containerId);

        if (!container) return;

        const s = eval(r);
        new p5(s, document.getElementById(containerId));
      });
  }
}

customElements.define("p5-sketch", P5Sketch);
