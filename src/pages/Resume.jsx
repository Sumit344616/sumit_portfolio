import React from "react";
import Layout from "../components/Layout";

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
    </Layout>
  );
};

export default Resume;
