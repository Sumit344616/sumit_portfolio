import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Service data - you can move this to a separate file or fetch from an API
  const servicesData = {
    'full-stack': {
      title: 'Full Stack Web Development',
      icon: 'bi-activity',
      image: '/assets/img/services1.jpg',
      description: 'Build responsive, scalable, and high-performance web applications using the MERN stack.',
      features: [
        'Custom web application development',
        'Responsive design implementation',
        'Database design and optimization',
        'API development and integration',
        'Performance optimization',
        'Security implementation'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Socket.IO'],
      longDescription: `We specialize in building robust and scalable web applications using the MERN stack. Our full-stack development services ensure that your application is not only visually appealing but also performs exceptionally well. We handle everything from frontend development to backend architecture, ensuring a seamless user experience.`
    },
    'backend-api': {
      title: 'Backend API Development',
      icon: 'bi-broadcast',
      image: '/assets/img/services2.jpg',
      description: 'Design and develop secure RESTful APIs with robust authentication.',
      features: [
        'RESTful API development',
        'Authentication & Authorization',
        'Database integration',
        'API documentation',
        'Performance optimization',
        'Security implementation'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'OAuth', 'Swagger'],
      longDescription: `Our backend development services focus on creating secure, scalable, and efficient APIs that power your applications. We implement best practices for authentication, data validation, and error handling to ensure your backend is robust and reliable.`
    },
    // Add other services similarly
  };

  const service = servicesData[id];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  if (!service) {
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2>Service not found</h2>
          <button 
            className="btn-custom btn-glow mt-3"
            onClick={() => navigate('/services')}
          >
            Back to Services
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="service-details-page">
        {/* Hero Section */}
        <section 
          className="service-hero"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="overlay"></div>
          <div className="container position-relative">
            <div className="row min-vh-50 align-items-center">
              <div className="col-lg-8" data-aos="fade-up">
                <h1 className="text-white display-4 fw-bold mb-4">{service.title}</h1>
                <p className="lead text-white mb-4">{service.description}</p>
                <button 
                  className="btn-custom btn-glow"
                  onClick={() => navigate('/contact')}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-up">
                <h2 className="mb-4">What We Offer</h2>
                <p className="lead mb-5">{service.longDescription}</p>
                
                <div className="features-grid">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="feature-item"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <i className={`bi ${service.icon} feature-icon`}></i>
                      <h4>{feature}</h4>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="col-lg-4" data-aos="fade-left">
                <div className="tech-stack-card">
                  <h3>Technologies We Use</h3>
                  <div className="tech-tags">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5">
          <div className="container text-center" data-aos="fade-up">
            <h2>Ready to Start Your Project?</h2>
            <p className="lead mb-4">Let's discuss how we can help you achieve your goals</p>
            <button 
              className="btn-custom btn-glow"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceDetails; 