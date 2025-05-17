import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About</h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
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
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </p>
              <p className="m-0">
                Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis.
                Soluta eligendi fugiat provident soluta consequatur. Omnis fugiat ut. Ut ut illum aut doloremque. Quos ut sunt ut. Ut ut illum aut doloremque. Quos ut sunt ut.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;