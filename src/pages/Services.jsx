import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Services = () => {
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
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>Build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
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
    </Layout>
  );
};

export default Services;