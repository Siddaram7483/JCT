import  { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., sending email to backend)
    console.log('Email submitted:', email);

    // Update state to show that form is submitted
    setSubscribed(true);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.gradientBackground}>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay informed and connected with our latest updates, events, and stories.</p>
      </div>
      {!subscribed ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
            value={email}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      ) : (
        <p className={styles.subscribedMessage}>
          Thank you for subscribing! We will keep you updated with our latest news.
        </p>
      )}
      <p className={styles.disclaimer}>
        By subscribing, you agree to receive emails from us. You can unsubscribe at any time.
      </p>
    </section>
  );
};

export default Newsletter;
