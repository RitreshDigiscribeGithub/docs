class AppCode extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
<section class="source-code" data-doc="${this.getAttribute('file')}.${this.getAttribute('dot')}">
    <span class="code_dot">⬤</span>&nbsp;
    <span class="code_dot">⬤</span>&nbsp;
    <span class="code_dot">⬤</span>&nbsp;
 </section>
  <pre>
     <code class="language-${this.getAttribute('dot')}">
        ${String(this.getAttribute('code')).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}
     </code>
  </pre>`
    }
}

window.customElements.define('app-code', AppCode)
