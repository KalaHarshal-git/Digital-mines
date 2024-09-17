import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './style.css'; // Assuming your CSS file is in the same directory

const LandingPage = () => {
  // Refs for carousel and dropdown elements
  const carouselRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle('show');
    }
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.profile-btn')) {
        dropdownRef.current.classList.remove('show');
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Carousel functionality
  const showSlide = (index) => {
    if (carouselRef.current) {
      const slides = carouselRef.current.querySelectorAll('.testimonial-item');
      const totalSlides = slides.length;
      const newSlide = (index + totalSlides) % totalSlides;
      setCurrentSlide(newSlide);
      carouselRef.current.style.transform = `translateX(${-newSlide * 320}px)`;
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  };

  const nextTestimonial = () => {
    showSlide(currentSlide + 1);
  };

  const prevTestimonial = () => {
    showSlide(currentSlide - 1);
  };

  // Initialize carousel
  useEffect(() => {
    if (nextBtnRef.current && prevBtnRef.current) {
      nextBtnRef.current.addEventListener('click', nextTestimonial);
      prevBtnRef.current.addEventListener('click', prevTestimonial);
    }

    return () => {
      if (nextBtnRef.current && prevBtnRef.current) {
        nextBtnRef.current.removeEventListener('click', nextTestimonial);
        prevBtnRef.current.removeEventListener('click', prevTestimonial);
      }
    };
  }, [currentSlide]);

  return (
    <>
      {/* Header Section */}
      <header>
        <div className="logo-container">
          <img src="logo.png" alt="Company Logo" className="logo" />
          <h1 className="site-title">Coal Mining Admin Portal</h1>
        </div>
        <nav>
          <ul className="nav-menu">
            <li><Link to="#dashboard" className="page-btn">Dashboard</Link></li>
            <li><Link to="#shift-handover" className="page-btn">Shift Handover Log</Link></li>
            <li><Link to="#smp" className="page-btn">Safety Management Plan</Link></li>
            <li><Link to="#reports" className="page-btn">Reports & Analytics</Link></li>
            <li><Link to="#user-management" className="page-btn">User Management</Link></li>
            <li><Link to="#help" className="page-btn">Help/Support</Link></li>
          </ul>
        </nav>
        {/* Login Button Section */}
        <div className="login-button">
          <Link to="/login" className="header-btn">Login</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ensuring Productivity & Safety with Digital Solutions</h1>
          <p>Streamline shift handovers and safety management for your coal mining operations.</p>
          <a href="#dashboard" className="cta-btn">Explore the Dashboard</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <img src="shift-icon.png" alt="Shift Handover Icon" className="feature-icon" />
            <h3>Digital Shift Handover System</h3>
            <p>Streamline shift transitions and improve communication between shifts.</p>
            <Link to="#shift-handover" className="learn-more">Learn More</Link>
          </div>
          <div className="feature-item">
            <img src="safety-icon.png" alt="Safety Management Icon" className="feature-icon" />
            <h3>Safety Management Plan (SMP)</h3>
            <p>Ensure compliance with DGMS guidelines and enhance safety protocols.</p>
            <Link to="#smp" className="learn-more">Learn More</Link>
          </div>
          <div className="feature-item">
            <img src="analytics-icon.png" alt="Analytics Icon" className="feature-icon" />
            <h3>Real-time Data & Reports</h3>
            <p>Access up-to-date reports and analytics to monitor operations.</p>
            <Link to="#reports" className="learn-more">Learn More</Link>
          </div>
          <div className="feature-item">
            <img src="cloud-icon.png" alt="ERP Integration Icon" className="feature-icon" />
            <h3>Integration with ERP</h3>
            <p>Seamlessly integrate with existing ERP systems for enhanced efficiency.</p>
            <Link to="#erp" className="learn-more">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition-section">
        <h2 className="section-title">Why Choose Our System?</h2>
        <div className="value-proposition-grid">
          <div className="benefits-column">
            <ul className="benefits-list">
              <li>Improve Productivity by reducing shift transition time.</li>
              <li>Ensure Compliance with DGMS Guidelines.</li>
              <li>Enhance Safety through streamlined information sharing.</li>
              <li>Access real-time data and detailed reports for informed decision-making.</li>
            </ul>
          </div>
          <div className="media-column">
            <video controls className="demo-video">
              <source src="shift_handover_demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            <div className="testimonial-item">
              <img src="supervisor.png" alt="Mine Supervisor" className="testimonial-icon" />
              <p className="testimonial-quote">"The digital shift handover system has streamlined our operations. I can’t imagine going back to paper logs."</p>
              <p className="testimonial-author">- John Doe, Mine Supervisor</p>
            </div>
            <div className="testimonial-item">
              <img src="safety-manager.png" alt="Safety Manager" className="testimonial-icon" />
              <p className="testimonial-quote">"This system has significantly improved safety by ensuring nothing is missed during shift transitions."</p>
              <p className="testimonial-author">- Jane Smith, Safety Manager</p>
            </div>
            <div className="testimonial-item">
              <img src="company-leader.png" alt="Company Leader" className="testimonial-icon" />
              <p className="testimonial-quote">"Integration with our ERP has enhanced decision-making and overall efficiency."</p>
              <p className="testimonial-author">- Michael Johnson, Company Leader</p>
            </div>
          </div>
          <button className="carousel-btn prev" ref={prevBtnRef}>❮</button>
          <button className="carousel-btn next" ref={nextBtnRef}>❯</button>
        </div>
      </section>

      {/* Technology Stack/Integration Section */}
      <section className="tech-stack-section">
        <h2 className="section-title">Seamless Integration with Existing Systems</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <img src="erp-icon.png" alt="ERP Integration Icon" className="tech-icon" />
            <h3>ERP Systems</h3>
            <p>Our system integrates effortlessly with your existing ERP solutions to ensure smooth operations and data synchronization.</p>
          </div>
          <div className="tech-item">
            <img src="security-icon.png" alt="Data Security Icon" className="tech-icon" />
            <h3>Data Security</h3>
            <p>We employ advanced data security protocols to safeguard sensitive information and maintain compliance with industry standards.</p>
          </div>
          {/* Add more technology items as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="#home" className="footer-link">Home</Link></li>
              <li><Link to="#dashboard" className="footer-link">Dashboard</Link></li>
              <li><Link to="#reports" className="footer-link">Reports</Link></li>
              <li><Link to="#help" className="footer-link">Help Center</Link></li>
            </ul>
          </div>
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Email: <a href="mailto:support@coalmining.com" className="footer-link">support@coalmining.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="footer-link">+1 234 567 890</a></p>
            <p>Address: 123 Mining Road, Coal City, CC 12345</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            {/* Add more social media links as needed */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Coal Mining Admin Portal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
