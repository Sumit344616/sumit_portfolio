import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/main.css";
import Typewriter from 'typewriter-effect';

// Import vendor scripts
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import { Navigation, Pagination } from "swiper/modules";
import Layout from "../components/Layout";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 50,
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // Initialize Isotope
    const grid = document.querySelector(".portfolio-grid");
    if (grid) {
      const iso = new Isotope(grid, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      // Filter items on click
      const filterButtons = document.querySelectorAll(".portfolio-filters li");
      filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const filterValue = button.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });

          // Update active class
          filterButtons.forEach((btn) => btn.classList.remove("filter-active"));
          button.classList.add("filter-active");
        });
      });

      return () => {
        iso.destroy();
      };
    }

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });

    // Initialize Swiper
    const swiper = new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      lightbox.destroy();
      swiper.destroy();
    };
  }, []);

  const services = [
    {
      id: 'full-stack',
      title: 'Full Stack Web Development',
      icon: 'bi-activity',
      image: '/assets/img/services1.jpg',
      description: 'Build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).'
    },
    {
      id: 'backend-api',
      title: 'Backend API Development',
      icon: 'bi-broadcast',
      image: '/assets/img/services2.jpg',
      description: 'Design and develop secure RESTful APIs, integrate third-party services, and implement robust authentication using JWT and middleware.'
    },
    {
      id: 'frontend',
      title: 'Frontend UI/UX Development',
      icon: 'bi-easel',
      image: '/assets/img/services3.jpg',
      description: 'Create interactive and visually appealing frontends with React.js, Tailwind CSS, and component-based architecture for seamless UX.'
    },
    {
      id: 'cloud',
      title: 'Cloud & Firebase Integration',
      icon: 'bi-bounding-box-circles',
      image: '/assets/img/services4.jpg',
      description: 'Set up real-time databases, cloud functions, notifications, and user authentication using Firebase and Google Cloud services.'
    },
    {
      id: 'optimization',
      title: 'Bug Fixing & Optimization',
      icon: 'bi-calendar4-week',
      image: '/assets/img/services5.jpg',
      description: 'Identify and resolve performance bottlenecks, fix critical bugs, and ensure smooth deployment with CI/CD practices.'
    },
    {
      id: 'admin',
      title: 'Admin Dashboards & Analytics',
      icon: 'bi-chat-square-text',
      image: '/assets/img/services6.jpg',
      description: 'Develop dynamic admin panels with charts, filtering, and real-time data visualization for better decision-making.'
    }
  ];
  return (
    <Layout>
      <section
        id="hero"
        className="hero"
        style={{
          backgroundImage: "url('/assets/img/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div 
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 
                data-aos="fade-up" 
                className="display-4 fw-bold text-white mb-4"
              >
                <Typewriter
                  options={{
                    strings: ["Hi, I'm Sumit", "MERN Stack Developer"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h2>
              <p 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="lead text-white mb-4"
              >
                I'm a MERN STACK DEVELOPER FROM AHMEDABAD City, specializing in
                fashion, portrait, and commercial photography.
              </p>
              <div 
                data-aos="fade-up" 
                data-aos-delay="200"
                className="d-flex gap-3"
              >
                <Link to="/contact" className="btn-custom btn-glow">
                  Contact Me
                </Link>
                <Link to="/portfolio" className="btn-custom btn-outline">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="/assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 content">
              <h2> MERN STACK DEVELOPER FROM AHMEDABAD</h2>
              <p className="fst-italic py-3">
                Experienced and results-driven Full Stack Developer with a
                strong foundation in MERN stack technologies (MongoDB,
                Express.js, React.js, Node.js)
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>30 March 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>https://sumit-portfolio-five-drab.vercel.app/</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 6353899544</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Ahmedabad, INDIA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>22</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong>{" "}
                      <span>Bsc.IT(Information Technology)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>sadhusumit30@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
              Experienced and results-driven Full Stack Developer with a strong foundation in MERN stack technologies (MongoDB, Express.js, React.js, Node.js).Proficient in integrating Google Cloud services, Firebase (real-time database, notifications), and third-party APIs, including social login and Android subscriptions. 
              </p>
              <p className="m-0">
              Adept at both frontend and backend development, with hands-on expertise in developing e-commerce platforms, admin panels, chat systems using Socket.IO, and robust backend architectures. Committed to delivering optimized user experiences and clean, maintainable code.
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
                <p>
                  <em>
                    {" "}
                    Experienced and results-driven Full Stack Developer with a
                    strong foundation in MERN stack technologies (MongoDB,
                    Express.js, React.js, Node.js).
                  </em>
                </p>
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
                <p>
                  <em>
                    Gujarat Technological University, Ahmedabad, Gujarat, INDIA
                  </em>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4> MERN Stack Developer</h4>
                <h5>2025 - Present</h5>
                <p>
                  <em>Vasundhara Infotech , Surat </em>
                </p>
                <ul>
                  <li>
                    Developed scalable and responsive web applications using
                    React.js and Node.js, ensuring optimal performance and
                    maintainability.
                  </li>
                  <li>
                    {" "}
                    Integrated third-party APIs such as payment gateways,
                    messaging services,OpenAI chatbot and Android in-app
                    subscriptions.{" "}
                  </li>
                  <li>
                    Implemented real-time features using WebSockets (Socket.IO)
                    for live chat systems, notifications, and dynamic user
                    interactions.
                  </li>
                  <li>
                    {" "}
                    Integrated Firebase services including real-time database,
                    push notifications, and Google authentication for secure,
                    cloud-based functionality.
                  </li>
                  <li>
                    {" "}
                    Enabled social login (Google, Facebook) for streamlined user
                    access and improved engagement.
                  </li>
                  <li>
                    Built and maintained robust RESTful APIs with Node.js and
                    Express.js to support both frontend applications and mobile
                    platforms.
                  </li>
                  <li>
                    Delivered multiple projects including e-commerce platforms,
                    admin dashboards, and real-time communication tools with
                    advanced user management and subscription handling.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Web Developer</h4>
                <h5>2017 - 2018</h5>
                <p>
                  <em> Sourceved Technologies Pvt Ltd ,Ahmedabad</em>
                </p>
                <ul>
                  <li>
                    Gained hands-on experience in C# MVC development, assisting
                    in backend systems' maintenance, refactorin g, and
                    performance tuning to support scalable applications
                  </li>
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
            <p>
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
              porro incidunt dolores placeat sunt id nobis omnis tiledo stran
              delop
            </p>
          </div>

         
          <div className="row gy-5">
          
          {services.map((service, index) => (
              <div 
                key={service.id}
                className="col-xl-4 col-md-6" 
                data-aos="zoom-in" 
                data-aos-delay={200 + (index * 200)}
              >
                <Link to={`/services/${service.id}`} className="service-link">
                  <div className="service-item">
                    <div className="img">
                      <img src={service.image} className="img-fluid" alt={service.title} />
                    </div>
                    <div className="details position-relative">
                      <div className="icon">
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Portfolio</h2>
            <p>
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
              porro incidunt dolores placeat sunt id nobis omnis tiledo stran
              delop
            </p>
          </div>

          <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/app-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/app-1.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/product-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/product-1.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/branding-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 1</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding-1.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/app-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/app-2.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/product-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/product-2.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/branding-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 2</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding-2.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/app-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>App 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/app-3.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-product">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/product-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Product 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/product-3.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div className="portfolio-wrap">
                <img
                  src="/assets/img/portfolio/branding-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <div className="portfolio-title">
                    <h4>Branding 3</h4>
                  </div>
                  <div className="portfolio-links">
                    <a
                      href="/assets/img/portfolio/branding-3.jpg"
                      data-gallery="portfolio-gallery"
                      className="portfolio-lightbox"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="Portfolio Details">
                      <i className="bi bi-link"></i>
                    </a>
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
            <p>
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
              porro incidunt dolores placeat sunt id nobis omnis tiledo stran
              delop
            </p>
          </div>

          <div className="testimonials-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="/assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="/assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="/assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="/assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="/assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
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
            <p>
            We'd love to hear from you! Whether you have a question, want to work together, or just want to say hello—feel free to reach out.
            </p>
          </div>

          <div className="row g-5 g-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>
                If you have any inquiries, feedback, or project ideas, don't hesitate to contact us. We're here to help and will respond as soon as possible.
                </p>

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>Ahmedabad, Gujarat ,India 380059</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>sadhusumit30@gmail.com</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+91 6353899544</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
