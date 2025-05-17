import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Portfolio = () => {
  const isotopeRef = useRef(null);

  useEffect(() => {
    // Initialize Isotope
    const grid = document.querySelector('.portfolio-container');
    if (grid) {
      isotopeRef.current = new Isotope(grid, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      // Filter items on click
      const filterButtons = document.querySelectorAll('.portfolio-filters li');
      filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const filterValue = button.getAttribute('data-filter');
          isotopeRef.current.arrange({ filter: filterValue });
          
          // Update active class
          filterButtons.forEach(btn => btn.classList.remove('filter-active'));
          button.classList.add('filter-active');
        });
      });
    }

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });

    // Cleanup function
    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
      lightbox.destroy();
    };
  }, []);

  return (
    <Layout>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          {/* Filter Buttons */}
          <ul className="portfolio-filters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
          </ul>

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
                    <Link to="/portfolio-details/1" title="Portfolio Details"><i className="bi bi-link"></i></Link>
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
                    <Link to="/portfolio-details/2" title="Portfolio Details"><i className="bi bi-link"></i></Link>
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
                    <Link to="/portfolio-details/3" title="Portfolio Details"><i className="bi bi-link"></i></Link>
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
                    <Link to="/portfolio-details/4" title="Portfolio Details"><i className="bi bi-link"></i></Link>
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
                    <Link to="/portfolio-details/5" title="Portfolio Details"><i className="bi bi-link"></i></Link>
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
                    <Link to="/portfolio-details/6" title="Portfolio Details"><i className="bi bi-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;