import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    'full-stack': {
      title: 'Full Stack Web Development',
      icon: 'bi-activity',
      image: '/assets/img/services1.jpg',
      description: 'Build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      features: [
        'Complete MERN Stack Development',
        'Responsive Web Design',
        'Database Design & Implementation',
        'API Integration',
        'Authentication & Authorization',
        'Performance Optimization',
        'Deployment & Hosting'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Git']
    },
    'backend-api': {
      title: 'Backend API Development',
      icon: 'bi-broadcast',
      image: '/assets/img/services2.jpg',
      description: 'Design and develop secure RESTful APIs, integrate third-party services, and implement robust authentication using JWT and middleware.',
      features: [
        'RESTful API Design',
        'JWT Authentication',
        'Middleware Implementation',
        'Database Integration',
        'Third-party API Integration',
        'API Documentation',
        'Security Implementation'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Postman', 'Swagger', 'Git']
    },
    'frontend': {
      title: 'Frontend UI/UX Development',
      icon: 'bi-easel',
      image: '/assets/img/services3.jpg',
      description: 'Create interactive and visually appealing frontends with React.js, Tailwind CSS, and component-based architecture for seamless UX.',
      features: [
        'Responsive Design',
        'Component-Based Architecture',
        'State Management',
        'UI/UX Implementation',
        'Cross-browser Compatibility',
        'Performance Optimization',
        'Accessibility Implementation'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Git']
    },
    'cloud': {
      title: 'Cloud & Firebase Integration',
      icon: 'bi-bounding-box-circles',
      image: '/assets/img/services4.jpg',
      description: 'Set up real-time databases, cloud functions, notifications, and user authentication using Firebase and Google Cloud services.',
      features: [
        'Firebase Integration',
        'Real-time Database Setup',
        'Cloud Functions',
        'Authentication Services',
        'Cloud Storage',
        'Push Notifications',
        'Analytics Integration'
      ],
      technologies: ['Firebase', 'Google Cloud', 'Node.js', 'JavaScript', 'Cloud Functions', 'Firestore']
    },
    'optimization': {
      title: 'Bug Fixing & Optimization',
      icon: 'bi-calendar4-week',
      image: '/assets/img/services5.jpg',
      description: 'Identify and resolve performance bottlenecks, fix critical bugs, and ensure smooth deployment with CI/CD practices.',
      features: [
        'Performance Optimization',
        'Bug Fixing',
        'Code Refactoring',
        'CI/CD Implementation',
        'Testing & Quality Assurance',
        'Security Audits',
        'Documentation'
      ],
      technologies: ['JavaScript', 'Node.js', 'Git', 'CI/CD Tools', 'Testing Frameworks', 'Debugging Tools']
    },
    'admin': {
      title: 'Admin Dashboards & Analytics',
      icon: 'bi-chat-square-text',
      image: '/assets/img/services6.jpg',
      description: 'Develop dynamic admin panels with charts, filtering, and real-time data visualization for better decision-making.',
      features: [
        'Dashboard Development',
        'Data Visualization',
        'Real-time Updates',
        'User Management',
        'Analytics Integration',
        'Report Generation',
        'Custom Filtering'
      ],
      technologies: ['React.js', 'Chart.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS']
    }
  };

  const service = services[id];

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
                <p className="lead mb-5">{service.description}</p>
                
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