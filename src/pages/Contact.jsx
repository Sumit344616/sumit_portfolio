import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <p>We’d love to hear from you! Whether you have a question, want to work together, or just want to say hello—feel free to reach out.</p>
          </div>

          <div className="row g-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Ahmedabad, Gujarat ,India 380059</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>sadhusumit30@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+91 6353899544</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5 mt-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg" style={{ border: 0 }} allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;