import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';

// Import vendor scripts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Isotope from 'isotope-layout';
import { Navigation, Pagination } from 'swiper/modules';
import Layout from '../components/Layout';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize Isotope
    const grid = document.querySelector('.portfolio-grid');
    if (grid) {
      const iso = new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      // Filter items on click
      const filterButtons = document.querySelectorAll('.portfolio-filters li');
      filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const filterValue = button.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
          
          // Update active class
          filterButtons.forEach(btn => btn.classList.remove('filter-active'));
          button.classList.add('filter-active');
        });
      });

      return () => {
        iso.destroy();
      };
    }

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });

    // Initialize Swiper
    const swiper = new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });

    return () => {
      lightbox.destroy();
      swiper.destroy();
    };
  }, []);

  return (
    <Layout>
      <section id="hero" className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 data-aos="fade-up">Hi, I'm Kelly</h2>
              <p data-aos="fade-up" data-aos-delay="100">I'm a  MERN STACK DEVELOPER FROM AHMEDABAD City, specializing in fashion, portrait, and commercial photography.</p>
              <div data-aos="fade-up" data-aos-delay="200">
                <Link to="/contact" className="btn-custom">Contact Me</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/assets/img/back.jpg" alt="" className="img-fluid" data-aos="zoom-in" data-aos-delay="200" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/img/profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-5 content">
              <h2> MERN STACK DEVELOPER FROM AHMEDABAD</h2>
              <p className="fst-italic py-3">
                 Experienced and results-driven Full Stack Developer with a strong
 foundation in MERN stack technologies (MongoDB, Express.js, React.js,
 Node.js)
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30 March 2003</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://sumit-portfolio-five-drab.vercel.app/</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 6353899544</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ahmedabad, INDIA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc.IT(Information Technology)</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sadhusumit30@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
              Experienced and results-driven Full Stack Developer with a strong
 foundation in MERN stack technologies (MongoDB, Express.js, React.js,
 Node.js).Proficient in integrating Google Cloud services, Firebase (real-time
 database, notifications), and third-party APIs, including social login and
 Android subscriptions. Adept at both frontend and backend development,
 with hands-on expertise in developing e-commerce platforms, admin
 panels, chat systems using Socket.IO, and robust backend architectures.
 Committed to delivering optimized user experiences and clean,
 maintainable code.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume">
        <div className="container">
          <div className="section-header">
            <h2>Resume</h2>
            <p>Full Stack Developer</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Sumit Sadhu</h4>
                <p><em> Experienced and results-driven Full Stack Developer with a strong
 foundation in MERN stack technologies (MongoDB, Express.js, React.js,
 Node.js).</em></p>
                <ul>
                  <li>Ahmedabad,Gujarat, INDIA</li>
                  <li>+91 6353899544</li>
                  <li>sadhusumit30@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bsc.IT(Information Technology)</h4>
                <h5>2020 - 2023</h5>
                <p><em>Gujarat Technological University, Ahmedabad, Gujarat, INDIA</em></p>
              </div>
             
            </div>

            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Senior graphic design specialist</h4>
                <h5>2025 - Present</h5>
                <p><em>Vasundhara Infotech , Surat </em></p>
                <ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2017 - 2018</h5>
                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
          </div>

          <div className="row gy-5">
            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-5.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Velit Doloremque</h3>
                  </a>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
              <div className="service-item">
                <div className="img">
                  <img src="/assets/img/services-6.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Dolori Architecto</h3>
                  </a>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Portfolio</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
          </div>

          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img src="/assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a href="/assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery" className="portfolio-lightbox"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="Portfolio Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
          </div>

          <div className="testimonials-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
          </div>

          <div className="row g-5 g-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;