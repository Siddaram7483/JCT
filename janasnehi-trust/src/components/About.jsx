import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    
    <section id="about" className={styles.about}>

      <div className={styles.container}>
        <h2 className={styles.heading}>About Janasnehi Seva Trust</h2>
        <p className={styles.intro}>
          Janasnehi Seva Trust is committed to transforming the lives of orphans
          by providing them with holistic care, education, healthcare, and a
          nurturing environment. Our mission is to empower these children to
          lead fulfilling lives and contribute positively to society.
        </p>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3 className={styles.subHeading}>Our Mission</h3>
            <p className={styles.text}>
              To provide comprehensive support and opportunities for orphaned
              children, ensuring their well-being and development.
            </p>
            <Link to="/team" className={styles.linkButton}>
              Learn More
            </Link>
          </div>
          <div className={styles.highlight}>
            <h3 className={styles.subHeading}>Our Vision</h3>
            <p className={styles.text}>
              To create a world where every orphaned child has access to
              education, healthcare, and a loving home.
            </p>
            <Link to="/team" className={styles.linkButton}>
              Learn More
            </Link>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Our Story</h3>
            <p className={styles.text}>
              Janasnehi Seva Trust was founded with the belief that every child
              deserves a chance at a bright future. Our founders, Sowmya Vasu
              and Vemagal Papanna Prakash, started this journey with a vision to
              create a supportive environment for orphaned children. Today, we
              are proud to have positively impacted the lives of hundreds of
              children, providing them with the resources they need to succeed.
            </p>
          </div>
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Our Values</h3>
            <ul className={styles.valuesList}>
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Empowerment</li>
              <li>Respect</li>
              <li>Inclusiveness</li>
            </ul>
          </div>
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Our Approach</h3>
            <p className={styles.text}>
              We adopt a child-centric approach, focusing on the unique needs
              and potential of each child. Our programs are designed to foster
              their growth and development in a supportive and nurturing
              environment.
            </p>
          </div>
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Our Impact</h3>
            <p className={styles.text}>
              Over the years, Janasnehi Seva Trust has made significant strides
              in improving the lives of orphaned children. Through our
              comprehensive programs, we have been able to provide education,
              healthcare, and emotional support to numerous children, helping
              them realize their full potential.
            </p>
          </div>
          <div className={styles.infoSection}>
            <h3 className={styles.infoHeading}>Testimonials</h3>
            <p className={styles.text}>
              Janasnehi Seva Trust has changed my life. I now have access to
              education and the support I need to pursue my dreams. - Aashika,
              Beneficiary
            </p>
            <p className={styles.text}>
              The work that Janasnehi Seva Trust does is truly inspiring. They
              are making a real difference in the lives of so many children. -
              Ravi, Volunteer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
