import React from "react";

export const Header = () => {
  const slides = [
    { id: 1, src: "img/intro-bg.jpg", alt: "intro1" },
    { id: 2, src: "img/team-2.jpg", alt: "intro2" },
    { id: 3, src: "img/teachers_day.jpeg", alt: "intro3" },
   
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
          <h1 className="main-heading">AiMSA</h1>
          <p className="tagline">Innovating the Future of AI and Technology</p>
        </div>
    </div>
  );
};
