import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About</h2>
            <p>MERN Stack Developer from Ahmedabad

I'm an experienced and results-driven Full Stack Web Developer with a strong foundation in MERN stack technologies — MongoDB, Express.js, React.js, and Node.js. I specialize in building efficient, scalable, and user-friendly web applications.</p>
          </div>

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
              Experienced and results-driven Full Stack Developer with a strong foundation in MERN stack technologies (MongoDB, Express.js, React.js, Node.js).Proficient in integrating Google Cloud services, Firebase (real-time database, notifications), and third-party APIs, including social login and Android subscriptions. 
              </p>
              <p className="m-0">
              Adept at both frontend and backend development, with hands-on expertise in developing e-commerce platforms, admin panels, chat systems using Socket.IO, and robust backend architectures. Committed to delivering optimized user experiences and clean, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;