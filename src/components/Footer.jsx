import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> <a href="mailto:shashwat@theindierise.com">shashwat@theindierise.com</a></p>
          <p><strong>Address:</strong><br />
            C/O IIT M Research Park,<br />
            1FA, 1st Floor, Kanagam Road,<br />
            TTTI Taramani, Chennai 600113
          </p>
        </div>
        <div className="footer-map">
          <iframe
            title="IndieRise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8859186106366!2d80.24065177507567!3d13.048838113595202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676dcf3f3c7d%3A0x8c5e71e4cc4cfa8f!2sIIT%20Madras%20Research%20Park!5e0!3m2!1sen!2sin!4v1719057963842!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IndieRise Research Labs Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
