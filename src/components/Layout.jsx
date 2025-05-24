import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Preloader from './Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Refresh AOS on route change
    AOS.refresh();
  }, [location]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.classList.remove('mobile-nav-active');
  };

  return (
    <div className="index-page">
      <Preloader />
      
      <header id="header" className="header d-flex align-items-center light-background sticky-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">Sumit</h1>
          </Link>

          <i 
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
          ></i>

          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMobileNav} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link to="/about" onClick={closeMobileNav} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link to="/resume" onClick={closeMobileNav} className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
              <li><Link to="/services" onClick={closeMobileNav} className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
              <li><Link to="/portfolio" onClick={closeMobileNav} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
              <li className="dropdown">
                <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#" onClick={closeMobileNav}>Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#" onClick={closeMobileNav}>Deep Dropdown 1</a></li>
                      <li><a href="#" onClick={closeMobileNav}>Deep Dropdown 2</a></li>
                      <li><a href="#" onClick={closeMobileNav}>Deep Dropdown 3</a></li>
                      <li><a href="#" onClick={closeMobileNav}>Deep Dropdown 4</a></li>
                      <li><a href="#" onClick={closeMobileNav}>Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#" onClick={closeMobileNav}>Dropdown 2</a></li>
                  <li><a href="#" onClick={closeMobileNav}>Dropdown 3</a></li>
                  <li><a href="#" onClick={closeMobileNav}>Dropdown 4</a></li>
                </ul>
              </li>
              <li><Link to="/contact" onClick={closeMobileNav} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </ul>
          </nav>

          <div className="header-social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/itz_sumit_3.0/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sumit-sadhu-983041216/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>{new Date().getFullYear()}© <span>Copyright</span> <strong className="px-1 sitename">Sumit</strong> <span>All Rights Reserved<br /></span></p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/itz_sumit_3.0/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sumit-sadhu-983041216/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">Sumit</a> Distributed by <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
};

export default Layout; 