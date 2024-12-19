import React, { useMemo, useState, useEffect } from "react";

const ImageWithLoading = ({ src, alt, onLoad }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="image-container">
      {isLoading && (
        <div className="image-skeleton"></div>
      )}
      <img
        src={src || "./man.jpg"}
        alt={alt}
        loading="lazy"
        className={`team-image ${isLoading ? 'hidden' : 'fade-in'}`}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
      />
    </div>
  );
};

const ProfileCard = ({ data, className = "" }) => {
  return (
    <div className={`profile-card ${className}`}>
      <div className="img">
        <ImageWithLoading src={data.img} alt={data.name} />
      </div>
      <div className="caption">
        <h3>{data.name}</h3>
        <p>{data.job}</p>
        <div className="social-links">
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Team = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  const positionPriority = [
    "President",
    "Vice President",
    "Secretary",
    "Treasurer",
    "Technical Head",
    "Associate Technical Head",
    "Social Media Head",
    "Design Head",
    "Marketing Head",
    "Photography Head",
    "Event Head",
    "Membership Chair",
  ];

  const teamData = useMemo(
    () => (Array.isArray(props.data) ? props.data : []),
    [props.data]
  );

  const { presidentsAndVicePresidents, restOfTheTeam } = useMemo(() => {
    const presidentsAndVicePresidents = teamData.filter((d) =>
      ["President", "Vice President"].some((job) => d.job.includes(job))
    );

    const restOfTheTeam = teamData.filter(
      (d) => !["President", "Vice President"].some((job) => d.job.includes(job))
    );

    const sortedRestOfTheTeam = [...restOfTheTeam].sort((a, b) => {
      const aIndex = positionPriority.findIndex((pos) => a.job.includes(pos));
      const bIndex = positionPriority.findIndex((pos) => b.job.includes(pos));

      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }

      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return 0;
    });

    return {
      presidentsAndVicePresidents,
      restOfTheTeam: sortedRestOfTheTeam,
    };
  }, [teamData, positionPriority]);

  useEffect(() => {
    if (loadedImages === teamData.length) {
      setIsLoading(false);
    }
  }, [loadedImages, teamData.length]);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <h2>Meet the Team</h2>
        <p>
          Our team is a diverse group of individuals with different backgrounds,
          skills, and expertise. We share a common goal of working together to
          achieve our objectives and deliver results that exceed expectations.
        </p>
      </div>
      
      <div className="home-container">
        <div className="first-row">
          {presidentsAndVicePresidents.map((d, i) => (
            <ProfileCard
              key={`${d.name}-${i}`}
              data={d}
              className={i === 0 ? "first-row-left" : "first-row-right"}
            />
          ))}
        </div>

        {restOfTheTeam.length > 0 ? (
          <div className="team-grid">
            {restOfTheTeam.map((d, i) => (
              <ProfileCard
                key={`${d.name}-${i}`}
                data={d}
                onImageLoad={handleImageLoad}
              />
            ))}
          </div>
        ) : (
          <div className="loading-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="profile-card loading">
                <div className="img">
                  <div className="skeleton-image"></div>
                </div>
                <div className="caption">
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text short"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
