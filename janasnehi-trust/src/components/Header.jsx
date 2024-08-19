
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../Images/logo.jpg";
import HeroImage from "../Images/HeroImage.jpg";
import AboutUs from "../Images/AboutUs.jpg";
import OurVision from "../Images/OurVision.jpg";
import LatestNews from "../Images/LatestNews.jpg";
import latestNews1 from "../Images/LatestNews1.jpg";
import latestNews2 from "../Images/LatestNews2.jpg";
import Activities from "../Images/Activities.jpg";
import Activities1 from "../Images/Activities1.jpg";
import Activities2 from "../Images/Activities2.jpg";
import EducationImage from "../Images/EducationImage.jpg";
import FoodImage from "../Images/FoodImage.jpg";
import ClothsImage from "../Images/ClothsImage.jpg";
import MilkImage from "../Images/MilkImage.jpg";
import CelebrationImage from "../Images/CelebrationImage.jpg";
import HealthCareImage from "../Images/HealthCareImage.jpg";
import Testimonials from "../Images/Testimonials.jpg";

const Header = () => {
  const [showFullText, setShowFullText] = useState({
    latestNews: false,
    latestNews1: false,
    latestNews2: false,
    Activities: false,
    Activities1: false,
    Activities2: false,
  });

  const [volunteers, setVolunteers] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [donations, setDonations] = useState(0);

  // Define maximum values
  const maxVolunteers = 2500;
  const maxFundsRaised = 5000;
  const maxDonations = 20000;

  useEffect(() => {
    const interval = setInterval(() => {
      setVolunteers((prev) => {
        if (prev < maxVolunteers) {
          return Math.min(
            prev + Math.floor(Math.random() * 50) + 1,
            maxVolunteers
          );
        } else {
          clearInterval(interval);
          return prev;
        }
      });

      setFundsRaised((prev) => {
        if (prev < maxFundsRaised) {
          return Math.min(
            prev + Math.floor(Math.random() * 500) + 10,
            maxFundsRaised
          );
        } else {
          clearInterval(interval);
          return prev;
        }
      });

      setDonations((prev) => {
        if (prev < maxDonations) {
          return Math.min(
            prev + Math.floor(Math.random() * 1000) + 20,
            maxDonations
          );
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleText = (item) => {
    setShowFullText({
      ...showFullText,
      [item]: !showFullText[item],
    });
  };

  return (
    <div className={styles.scrollableContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logoimage} />
        </Link>
        <Link to="/" title="Home">
          Home
        </Link>
        <Link to="/about" title="About">
          About
        </Link>
        <Link to="/stories" title="Our Programs">
          Our Programs
        </Link>
        <Link to="/contact" title="Contact Us">
          Contact Us
        </Link>
        <p>
          <Link
            to="/donate"
            style={{
              backgroundColor: "red",
              padding: "8px 16px",
              borderRadius: "20px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Donate Now
          </Link>
        </p>
      </nav>

      {/* Hero Image */}
      <a href="#About">
        <img src={HeroImage} alt="Hero" className={styles.Hero} />
      </a>

      {/* About Us Section */}
      <h1>About Us</h1>
      <div className={styles.AboutUsContainer}>
        <div className={styles.AboutUsText}>
          <p>
            <b>WHO WE ARE:</b>
            <br />
            At Janasnehi Charitable Trust, we are committed to providing a
            compassionate, supportive, and dignified environment for elderly
            individuals who have no one to care for them. Located in the serene
            surroundings of #282, Sondekoppa, Dasanapura Hobli, Nelamangala, our
            facility has been a beacon of hope and comfort since 2018.
          </p>
        </div>
        <Link to="/about-us" className={styles.AboutUsImage}>
          <img src={AboutUs} alt="Who We Are" className={styles.AboutUs} />
        </Link>
      </div>

      {/* Our Vision Section */}
      <h1>Our Vision</h1>
      <div className={styles.OurVisionContainer}>
        <Link to="/our-vision" className={styles.OurVisionImage}>
          <img src={OurVision} alt="Our Vision" className={styles.OurVision} />
        </Link>
        <div className={styles.OurVisionText}>
          <p>
            <b>OUR VISION:</b>
            <br />
            To create a nurturing and empowering environment where every
            orphaned and abandoned child is provided with the love, care, and
            opportunities they need to thrive and reach their full potential.
          </p>
        </div>
      </div>
      <h1>Our mission</h1>
      <div className={styles.AboutUsContainer}>
        <div className={styles.AboutUsText}>
          <p>
            <b>OUR MISSION:</b>
            <br />
            To provide a safe and supportive home for orphaned and abandoned
            children, ensuring their physical, emotional, and educational needs
            are met. We are committed to fostering a sense of belonging and
            self-worth, promoting holistic development . To provide a safe and
            supportive home for orphaned and abandoned children, ensuring their
            physical, emotional, and educational needs are met. We are committed
            to fostering a sense of belonging and self-worth, promoting holistic
            development .
          </p>
        </div>
        <Link to="/about-us" className={styles.AboutUsImage}>
          <img src={AboutUs} alt="Who We Are" className={styles.AboutUs} />
        </Link>
      </div>
      <h1>Our Aim</h1>
      <div className={styles.OurVisionContainer}>
        <Link to="/our-vision" className={styles.OurVisionImage}>
          <img src={OurVision} alt="Our Vision" className={styles.OurVision} />
        </Link>
        <div className={styles.OurVisionText}>
          <p>
            <b>OUR AIM:</b>
            <br />
            Provide a Safe Environment: Ensure a secure and nurturing home where
            children feel safe. Holistic Development: Promote the physical,
            emotional, and intellectual growth of each child through tailored
            programs.
          </p>
        </div>
      </div>

      {/* Latest News Section */}
      <div className={styles.LatestNewsContainer}>
        <div className={styles.LatestNewsItem}>
          <Link to="/latest-news">
            <img
              src={LatestNews}
              alt="Latest News"
              className={styles.LatestNewsImage}
            />
          </Link>
          <p>
            <b>Latest News:</b> Short summary or caption here.
          </p>
          {showFullText.latestNews && (
            <p>
              Full text or paragraph goes here for Latest News. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla convallis
              libero id ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("latestNews")}
          >
            {showFullText.latestNews ? "Read less" : "Read more"}
          </span>
        </div>
        <div className={styles.LatestNewsItem}>
          <Link to="/latest-news/1">
            <img
              src={latestNews1}
              alt="Latest News 1"
              className={styles.LatestNewsImage}
            />
          </Link>
          <p>
            <b>Latest News 1:</b> Short summary or caption here.
          </p>
          {showFullText.latestNews1 && (
            <p>
              Full text or paragraph goes here for Latest News 1. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla convallis
              libero id ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("latestNews1")}
          >
            {showFullText.latestNews1 ? "Read less" : "Read more"}
          </span>
        </div>
        <div className={styles.LatestNewsItem}>
          <Link to="/latest-news/2">
            <img
              src={latestNews2}
              alt="Latest News 2"
              className={styles.LatestNewsImage}
            />
          </Link>
          <p>
            <b>Latest News 2:</b> Short summary or caption here.
          </p>
          {showFullText.latestNews2 && (
            <p>
              Full text or paragraph goes here for Latest News 2. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla convallis
              libero id ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("latestNews2")}
          >
            {showFullText.latestNews2 ? "Read less" : "Read more"}
          </span>
        </div>
      </div>

      {/* Support Us Section */}
      <div>
        <h1>You Can Support Us</h1>
        <nav className={styles.supportUs}>
          <div>
            <h3>EDUCATION</h3>
            <img
              src={EducationImage}
              alt="Education"
              className={styles.supportImage}
            />
          </div>
          <div>
            <h3>FOOD</h3>
            <img src={FoodImage} alt="Food" className={styles.supportImage} />
          </div>
          <div>
            <h3>CLOTHS</h3>
            <img
              src={ClothsImage}
              alt="Clothes"
              className={styles.supportImage}
            />
          </div>
          <div>
            <h3>MILK</h3>
            <img src={MilkImage} alt="Milk" className={styles.supportImage} />
          </div>
          <div>
            <h3>CELEBRATION</h3>
            <img
              src={CelebrationImage}
              alt="Celebration"
              className={styles.supportImage}
            />
          </div>
          <div>
            <h3>HEALTHCARE</h3>
            <img
              src={HealthCareImage}
              alt="Health Care"
              className={styles.supportImage}
            />
          </div>
        </nav>
      </div>

      {/* Activities Section */}
      <h1>Activities</h1>
      <div className={styles.ActivitiesContainer}>
        <div className={styles.ActivitiesItem}>
          <Link to="/activities">
            <img
              src={Activities}
              alt="Activities"
              className={styles.ActivitiesImage}
            />
          </Link>
          <p>
            <b>Activities:</b> Short summary or caption here.
          </p>
          {showFullText.Activities && (
            <p>
              Full text or paragraph goes here for Activities. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nulla convallis libero id
              ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("Activities")}
          >
            {showFullText.Activities ? "Read less" : "Read more"}
          </span>
        </div>
        <div className={styles.ActivitiesItem}>
          <Link to="/activities1">
            <img
              src={Activities1}
              alt="Activities 1"
              className={styles.ActivitiesImage}
            />
          </Link>
          <p>
            <b>Activities 1:</b> Short summary or caption here.
          </p>
          {showFullText.Activities1 && (
            <p>
              Full text or paragraph goes here for Activities 1. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla convallis
              libero id ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("Activities1")}
          >
            {showFullText.Activities1 ? "Read less" : "Read more"}
          </span>
        </div>
        <div className={styles.ActivitiesItem}>
          <Link to="/activities2">
            <img
              src={Activities2}
              alt="Activities 2"
              className={styles.ActivitiesImage}
            />
          </Link>
          <p>
            <b>Activities 2:</b> Short summary or caption here.
          </p>
          {showFullText.Activities2 && (
            <p>
              Full text or paragraph goes here for Activities 2. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla convallis
              libero id ante commodo, vel volutpat lorem facilisis.
            </p>
          )}
          <span
            className={styles.ReadMore}
            onClick={() => toggleText("Activities2")}
          >
            {showFullText.Activities2 ? "Read less" : "Read more"}
          </span>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.Testimonials}>
        <img
          src={Testimonials}
          alt="Testimonials"
          className={styles.TestimonialsImage}
        />
        <div className={styles.TestimonialsContent}>
          <h3>
            `It is our privilege to say that we are associated ourselves with
            this foundation and we shall continue to support the foundation
            whose presence is going to play a positive role for strong society,
            which will help in national development.`
          </h3>
          <p>I wish them all the best for their endeavors in the future</p>
          <b>Sindushree</b>
        </div>
      </div>

      {/* Current Stats Section */}
      <h1>Current Stats</h1>
      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <h3>Volunteers</h3>
          <p>{volunteers.toLocaleString()}</p>
        </div>
        <div className={styles.statsItem}>
          <h3>Funds Raised</h3>
          <p>₹{fundsRaised.toLocaleString()}</p>
        </div>
        <div className={styles.statsItem}>
          <h3>Donations</h3>
          <p>₹{donations.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
