
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.navLinks}>
          <Link to="/" title="Home">Home</Link>
          <Link to="/about" title="About">About</Link>
          <Link to="/contact" title="Contact Us">Contact Us</Link>
          <Link to="/donate" title="Donate">Donate</Link>
          <Link to="/gallery" title="Gallery">Gallery</Link>
          <Link to="/stories" title="Stories">Stories</Link>
          <Link to="/team" title="Team Behind">Team Behind</Link>
          <Link to="/newsletter" title="Newsletter">Newsletter</Link>
        </div>
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>Address: 299J+F4, Bengaluru, Karnataka 562162</p>
          <p>Email: info@janasnehi.org</p>
          <p>Phone: +91 96868 79752</p>
          <a href="https://g.co/kgs/GxvM4Kt" target="_blank" rel="noopener noreferrer">
            <h4>Live Location</h4>
          </a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Follow us on</h3>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} /> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyRights}>
        <p>© 2024 JanaSnehi Trust, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
