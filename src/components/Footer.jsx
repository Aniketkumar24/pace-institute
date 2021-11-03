import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-section address-section">
            <h2 className="title">Address:</h2>
            <p className="section-desc">
              PACE tower, opposite Jyoti Raj complex, 90 feet Road, Kankarbagh,
              Patna. 800020
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57576.52284640719!2d85.157266!3d25.58721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf97f67e31741abb0!2sPACE%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1635656649618!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </li>
          <li className="footer-section links-section">
            <h2 className="title">Quick Links:</h2>
            <ul className="links-list">
              <li className="links-item">
                <a href="#" className="link">
                  Home
                </a>
              </li>
              <li className="links-item">
                <a href="#" className="link">
                  Courses
                </a>
              </li>
              <li className="links-item">
                <a href="#" className="link">
                  School of English
                </a>
              </li>
              <li className="links-item">
                <a href="#" className="link">
                  Pace Commerce Academy
                </a>
              </li>
              <li className="links-item">
                <a href="#" className="link">
                  Pace IIT & Medical
                </a>
              </li>
            </ul>
          </li>
          <li className="footer-section contact-section">
            <h2 className="title">Contact us:</h2>
            <ul className="contact-list icon-list">
              <li className="contact-item icon-item">
                <a className="contact-link icon-link" href="#">
                  <i className="fab fa-whatsapp fa-lg contact-icon"></i>
                  <p>9334314161</p>
                </a>
              </li>
              <li className="contact-item icon-item">
                <a className="contact-link icon-link" href="#">
                  <i className="far fa-envelope fa-lg contact-icon"></i>
                  <p>personalityenglish@gmail.com</p>
                </a>
              </li>
              <li className="contact-item icon-item">
                <a className="contact-link icon-link" href="#">
                  <i className="fas fa-phone-alt fa-lg contact-icon"></i>
                  <p>9334314161, 7979911318, 7979971401, 9334847381</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="footer-section social-section">
            <h2 className="title">Social:</h2>
            <ul className="social-list icon-list">
              <li className="social-item icon-item">
                <a href="#" className="social-link icon-link">
                  <i className="fab fa-facebook social-icon fa-lg"></i>
                  <p>Facebook</p>
                </a>
              </li>
              <li className="social-item icon-item">
                <a href="#" className="social-link icon-link">
                  <i className="fab fa-instagram icon fa-lg"></i>
                  <p>Instagram</p>
                </a>
              </li>
              <li className="social-item icon-item">
                <a href="#" className="social-link icon-link">
                  <i className="fab fa-youtube icon fa-lg"></i>
                  <p>YouTube</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="copyright-section">
          <p>Copyright © 2021 Pace Institute</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
