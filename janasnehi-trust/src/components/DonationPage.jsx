
import { useState } from 'react';
import styles from './DonationPage.module.css';

const DonationPage = () => {
  const [donationData, setDonationData] = useState({
    amount: '',
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setDonationData({
      ...donationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Send donationData to backend API or handle donation submission logic
    console.log('Donation Data:', donationData);
    // Reset form fields after submission if needed
    setDonationData({
      amount: '',
      name: '',
      email: ''
    });
  };

  return (
    <section className={styles.donationPage}>
      <h2>Donate Now</h2>
      <p>Your contributions help us provide better care and opportunities for the orphans.</p>
      <div className={styles.donationForm}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={donationData.amount}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={donationData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={donationData.email}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className={styles.donateButton}>Donate Now</button>
        </form>
      </div>
    </section>
  );
};

export default DonationPage;





