class Navbar extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = `<div class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="col-4">
          <a class="navbar-brand t-t-c" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          &nbsp;&nbsp;<i class="bi bi-list"></i>&nbsp;&nbsp;
          <span class="nav-title">title</span>
        </a>
        </div>
        <div class="col-8">
        <div class="d-flex justify-content-end">
        <a class="nav-link text-white" aria-current="page" href="/">Home</a>
        </div>
      </div>
      </div>
      
        <!-- drawer -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          </div>
          <div class="">
          <ul class="list-group">
            ${this.list().map(e => {
      return `<li onclick="location.href = '#${e.path}'"
                class="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close" aria-current="true">
                ${e.topic}
                 </li>`
    }).join('\n')
      }
           </ul>
          </div>
      </div>`
  }

  list() {
    return [
      { path: 'app-booting', topic: 'app booting' },
      { path: 'fragment', topic: 'fragment' }
    ]
  }

  titlePush() {
    return location.hash
  }
}

window.customElements.define('app-navbar', Navbar)


