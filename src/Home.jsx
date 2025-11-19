import React from 'react';
import './styles.css';
import content from './properties/content';
import HeroSlideshow from './HeroSlideshow';

const Home = () => {
  return (
    <main id="home">
      <section className="hero-text-section">
        <div className="container">
          <h1 className="hero-title">
            {content.hero.title}
            <br />
            {content.hero.location}
          </h1>
          <p className="hero-description">{content.hero.description}</p>
          <a href="#contact" className="cta-button">Contact Us</a>
        </div>
      </section>
      <section className="hero-slideshow-section">
        <HeroSlideshow />
      </section>

      <div className="container">
        <section id="services">
          <h2>{content.services.title}</h2>
          <div className="services-grid">
            {content.services.items.map((item, index) => (
              <div key={index} className="service-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="rentals" className="rentals-section">
          <h2>{content.rentals.title}</h2>
          <p>{content.rentals.description}</p>
          <div className="rentals-grid">
            {content.rentals.items.map((item, index) => (
              <div key={index} className="rental-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials">
          <h2>{content.testimonials.title}</h2>
          <div className="testimonials-grid">
            {content.testimonials.reviews.map((review, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">“{review.text}”</p>
                <p className="testimonial-author">— {review.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>{content.contact.title}</h2>
          <div className="contact-info">
            <p>Ready to find the perfect nanny for your family? Get in touch today!</p>
            <a href={`mailto:${content.contact.email}`} className="cta-button">
              Contact Me
            </a>
            <div className="contact-details">
              <span><strong>Email:</strong> {content.contact.email}</span>
              <span><strong>Phone:</strong> {content.contact.phone}</span>
              <a
                href="https://www.facebook.com/share/1LRiVUo7wL/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-link"
              >
                <strong>Facebook</strong>
                <img src="/facebook.png" alt="Facebook logo" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="about-section">
        <div className="container">
          <h2>{content.about.title}</h2>
          {content.about.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </section>

      {content.additionalSections.map((section, index) => (
        <section key={index} className="additional-info">
          <div className="container">
            <h2>{section.title}</h2>
            {section.paragraphs &&
              section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
