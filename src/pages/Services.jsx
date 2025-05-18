import React from 'react';
import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>Build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
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
                    <h3>Full Stack Web Development</h3>
                  </a>
                  <p>Build responsive, scalable, and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
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
                    <h3>Backend API Development
                    </h3>
                  </a>
                  <p>Design and develop secure RESTful APIs, integrate third-party services, and implement robust authentication using JWT and middleware.</p>
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
                    <h3>Frontend UI/UX Development
                    </h3>
                  </a>
                  <p>Create interactive and visually appealing frontends with React.js, Tailwind CSS, and component-based architecture for seamless UX.</p>
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
                    <h3>Cloud & Firebase Integration</h3>
                  </a>
                  <p>Set up real-time databases, cloud functions, notifications, and user authentication using Firebase and Google Cloud services.</p>
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
                    <h3>Bug Fixing & Optimization
                    </h3>
                  </a>
                  <p>Identify and resolve performance bottlenecks, fix critical bugs, and ensure smooth deployment with CI/CD practices.</p>
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
                    <h3>Admin Dashboards & Analytics</h3>
                  </a>
                  <p>Develop dynamic admin panels with charts, filtering, and real-time data visualization for better decision-making.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;