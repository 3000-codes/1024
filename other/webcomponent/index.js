class WordCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: sans-serif;
        }
      </style>
      <span><slot></slot></span>
    `;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const text = this.textContent.trim();
    console.log(text.length);
    const count = text.split(/\s+/).length;
    this.shadowRoot.querySelector('span').textContent = count;
  }
}
customElements.define('word-count', WordCount);