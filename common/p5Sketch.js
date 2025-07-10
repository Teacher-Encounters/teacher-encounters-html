const sheet = new CSSStyleSheet();

sheet.replaceSync(`
pre {
  white-space: pre;
  counter-reset: line;
  padding: 1rem;
  margin: 0;
  border: solid thin black;
  border-collapse: collapse;
  tab-size: 8;
  display: flex;
  flex-direction: column;
}

code {
  tab-size: 8;
  counter-increment: line;
}

code:before {
  content: counter(line) ':';
  user-select: none;
  -webkit-user-select: none;
}
`);

export default class P5Sketch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const source = this.getAttribute("src");
    const containerId = this.getAttribute('containerId');

    const pre = document.createElement('pre');

    const scriptTag = document.createElement('script');
    scriptTag.src = source;
    scriptTag.setAttribute('type', 'module');

    shadow.appendChild(scriptTag);
    shadow.appendChild(pre);
    shadow.adoptedStyleSheets = [sheet];

    // Load the p5 JS file and run it
    fetch(source)
      .then(r => r.text())
      .then((r) => {
        const s = eval(r);
        new p5(s, document.getElementById(containerId));
        const lines = r.split('\n');

        lines
          .forEach((line, lineNo) => {
              const code = document.createElement('code');
              code.innerHTML = line;
              pre.appendChild(code);
          });
      });
  }
}

customElements.define("p5-sketch", P5Sketch);
