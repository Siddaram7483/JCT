

import { Link } from 'react-router-dom';
import styles from './Donate.module.css';

const Donate = () => {
  return (
    <section id="donate" className={styles.donate}>
      <h2>Donate</h2>
      <p>Your contributions help us provide better care and opportunities for the orphans. Every donation, no matter the size, makes a significant impact.</p>
      
      <blockquote className={styles.quote}>
        The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi
      </blockquote>

      <div className={styles.donationOptions}>
        <div className={styles.donationBox}>
          <h3>One-Time Donation</h3>
          <p>Make a one-time donation to support our cause. Your generous gift will help us fund essential programs and services.</p>
          <Link to="/donate-page">
            <button className={styles.donateButton}>Donate Now</button>
          </Link>
        </div>

        <div className={styles.donationBox}>
          <h3>Monthly Donation</h3>
          <p>Become a monthly donor to provide ongoing support. Your recurring donations will ensure sustained assistance for the orphans.</p>
          <Link to="/donate-page">
            <button className={styles.donateButton}>Donate Monthly</button>
          </Link>
        </div>

        <div className={styles.donationBox}>
          <h3>In-Kind Donations</h3>
          <p>Support us by donating goods and services. We welcome contributions of food, clothing, educational materials, and more.</p>
          <Link to="/donate-page">
            <button className={styles.donateButton}>Donate Goods</button>
          </Link>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h3>Why Donate to Janasnehi?</h3>
        <ul>
          <li>We ensure that every child has access to quality education and healthcare.</li>
          <li>Your donations help us provide nutritious meals and safe shelters for the orphans.</li>
          <li>We organize skill development programs to empower OLDER for a brighter rest of thier lives.</li>
        </ul>
      </div>

      <div className={styles.contactInfo}>
        <p>For more information on how you can help, please contact us:</p>
        <p>Email: <a href="mailto:donations@janasnehi.org">donations@janasnehi.org</a></p>
        <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
      </div>
    </section>
  );
};

export default Donate;
