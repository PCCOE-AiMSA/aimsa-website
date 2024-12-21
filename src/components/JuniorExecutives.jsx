import React, { useMemo, useState } from "react";

const ProfileImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <div className="skeleton-image" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="team-image"
      loading="eager"
      onError={() => setHasError(true)}
    />
  );
};

const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <ProfileImage src={data.img} alt={data.name} />
      </div>
      <div className="caption caption-jr">
        <h3>{data.name}</h3>
        <p>{data.job}</p>
        <div className="social-links social-jr">
          <div className="jr">
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square"></i>
              </a>
            )}
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            )}
            {data.instagram && (
              <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const JuniorExecutives = ({ data }) => {
  return (
    <div className="jr-home-container home-container">
      {/* Heading for Junior Executives Section */}
      <h2 className="section-heading">Junior Executives</h2>
      <div className="team-grid">
        {data.map((member, index) => (
          <ProfileCard key={index} data={member} />
        ))}
      </div>
    </div>
  );
};

export default JuniorExecutives;