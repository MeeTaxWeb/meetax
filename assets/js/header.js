class MtHeader extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `

          <!-- Start Top Nav -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:admin@meetaxmultiservise.com">admin@meetaxmultiservise.com</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:646-410-0294">646-410-0294</a>
                </div>
                <div>
                    <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://www.instagram.com/meetax.multiserviceinc?igsh=MTRmYm1obHhxMnF5bA==" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://x.com/" target="_blank"><img src="./assets/img/x_1.png" style="height: 10px;"></a>
                </div>
            </div>
        </div>
    </nav>
    <!-- Close Top Nav -->


        <!-- Header -->
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">
            <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
                <img src="./assets/img/logo_meetax_1_letter_1440x323.png">
            </a>
  
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" 
                 id="templatemo_main_nav">
              <div class="flex-fill">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="index.html" data-page="index">Inicio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="services.html" data-page="services">Servicios</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="about.html" data-page="about">Sobre Nosotros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="contact.html" data-page="contact">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <!-- Close Header -->


      `;
      this.resaltarEnlaceActivo();
    }
  
    resaltarEnlaceActivo() {
      // Obtiene la URL actual
      const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  
      // Selecciona todos los enlaces del menú
      const links = this.querySelectorAll('a.nav-link');
  
      links.forEach(link => {
        // Obtiene el valor de data-page del enlace
        const page = link.getAttribute('data-page');
  
        // Si coincide con la página actual, aplica estilos
        if (page === currentPage || (currentPage === "" && page === "index")) {
          link.style.color = "#00b63b"; // Cambia a color verde
        }
      });
    }
  }
  
  customElements.define('mt-header', MtHeader);
  
