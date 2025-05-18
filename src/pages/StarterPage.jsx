import React from 'react'

const StarterPage = () => {
  return (
    <div className="starter-page-page">
      <header id="header" className="header d-flex align-items-center light-background sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Sumit</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="resume.html">Resume</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li className="dropdown">
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <div className="header-social-links">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Starter Section Section */}
        <section id="starter-section" className="starter-section section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Starter Section</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up">
            <p>Use this page as a starter for your own custom pages.</p>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Sumit</strong> <span>All Rights Reserved</span></p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader"></div>

      {/* Note: In React, you should handle these scripts differently, typically by importing them or using useEffect */}
      {/* Vendor JS Files */}
      {/* <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
      {/* <script src="assets/vendor/php-email-form/validate.js"></script> */}
      {/* <script src="assets/vendor/aos/aos.js"></script> */}
      {/* <script src="assets/vendor/waypoints/noframework.waypoints.js"></script> */}
      {/* <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script> */}
      {/* <script src="assets/vendor/swiper/swiper-bundle.min.js"></script> */}
      {/* <script src="assets/vendor/glightbox/js/glightbox.min.js"></script> */}
      {/* <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script> */}
      {/* <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> */}

      {/* Main JS File */}
      {/* <script src="assets/js/main.js"></script> */}
    </div>
  )
}

export default StarterPage