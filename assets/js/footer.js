class MtFooter extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `


  <!-- Start Footer -->
    <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo"><img src="./assets/img/logo_meetax_footer_1.png" style="height: 33px;"></h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            3880 Broadway, New York, NY 10032
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:888-531-3887">888-531-3887</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:admin@meetaxmultiservice.com">admin@meetaxmultiservice.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Sercicios</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Preparación de Impuestos - Income Tax</a></li>
                        <li><a class="text-decoration-none" href="#">Bookkeeping</a></li>
                        <li><a class="text-decoration-none" href="#">Remesas</a></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Más Infor.</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Inicio</a></li>
                        <li><a class="text-decoration-none" href="#">Sobre Nosotros</a></li>
                        <li><a class="text-decoration-none" href="#">Contacto</a></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/people/Meetax-Multi/61570053180303/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/meetax.multiserviceinc?igsh=MTRmYm1obHhxMnF5bA=="><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://x.com/"><?xml version="1.0" ?><img src="./assets/img/x_1.png" style="height: 18px;"></a>
                        </li>
                    </ul>
                </div>
                <!-- <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2024 MeeTax</p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <!-- End Footer -->


      `;
    }
  }
  
  customElements.define('mt-footer', MtFooter);
  
