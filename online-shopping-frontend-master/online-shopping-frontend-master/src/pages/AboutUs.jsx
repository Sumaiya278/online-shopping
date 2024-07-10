import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-container" style={{ textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>
        Welcome to OurShop, your ultimate destination for online shopping! We offer a wide range of products including electronics, fashion, home goods, and much more. Our mission is to provide customers with a seamless shopping experience, offering high-quality products at competitive prices.
      </p>
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become the preferred online shopping platform globally, known for reliability, convenience, and customer satisfaction.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower individuals and businesses by connecting them with a diverse selection of products through a user-friendly and secure online marketplace.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
