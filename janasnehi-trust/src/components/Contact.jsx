
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Example: Send formData to backend API or handle form submission logic
      console.log('Form Data:', formData);
      // Reset form fields after submission if needed
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInfo}>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@janasnehi.org">info@janasnehi.org</a></p>
        <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
      </div>
      <div className={styles.contactForm}>
        <h3>Send us a Message</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          {errors.subject && <p className={styles.error}>{errors.subject}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          {errors.message && <p className={styles.error}>{errors.message}</p>}

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
