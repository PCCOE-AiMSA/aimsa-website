import React from "react";

export const Header = () => {
  const slides = [
    { id: 1, src: "img/intro-bg.jpg", alt: "intro1" },
    { id: 2, src: "img/intro-bg.jpg", alt: "intro2" },
    { id: 3, src: "img/intro-bg.jpg", alt: "intro3" },
    { id: 4, src: "img/intro-bg.jpg", alt: "intro4" },
    { id: 5, src: "img/intro-bg.jpg", alt: "intro5" },
    { id: 6, src: "img/intro-bg.jpg", alt: "intro6" },
    { id: 7, src: "img/intro-bg.jpg", alt: "intro7" },
  ];

  return (
    <div className="header">
      <div className="slider">
        <div className="slide-track">
          {/* Original slides */}
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
          {/* Duplicate slides for smooth infinite scroll */}
          {slides.map((slide) => (
            <div className="slide" key={`duplicate-${slide.id}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
       {/* Add Text and Tagline below carousel */}
       <div className="text-container">
          <h1 className="main-heading">AIMSA</h1>
          <p className="tagline">Innovating the Future of AI and Technology</p>
        </div>
    </div>
  );
};
