import React from 'react';
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Resume;