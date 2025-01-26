import React, { useState, useEffect } from "react";

// images la path dya fkt
const slides = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734956717/teachers_day_ly60ha.jpg",
    alt: "Intro 1",
    title: "Welcome To AiMSA",
    subtitle: "Innovating the Future of AI",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734956841/intro-bg_iupdej.jpg",
    alt: "Team",
    title: "Our Team",
    subtitle: "Driving Technology Forward",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734956849/team-2_hbddtm.jpg",
    alt: "Teachers",
    title: "Empowering Education",
    subtitle: "AI in Learning",
  },
];

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ 
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="overlay"></div>
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;