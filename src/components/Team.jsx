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

const ProfileCard = ({ data, className = "" }) => (
  <div className={`profile-card ${className}`}>
    <div className="img">
      <ProfileImage src={data.img} alt={data.name} />
    </div>
    <div className="caption">
      <h3>{data.name}</h3>
      <p>{data.job}</p>
      <div className="social-links">
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
);

export const Team = (props) => {
  const positionPriority = [
    "President",
    "Vice President",
    "Secretary",
    "Treasurer",
    "Technical Head",
    "Associate Technical Head",
    "Marketing and Publicity Head",
    "Marketing Head",
    "Social Media Head",
    "Design Head",
    "Photography Head",
    "Event Head",
    "Membership Chair",
  ];

  const { presidentsAndVicePresidents, restOfTheTeam } = useMemo(() => {
    const data = Array.isArray(props.data) ? props.data : [];
    
    const presidentsAndVPs = data.filter(d => 
      d.job.includes("President") || d.job.includes("Vice President")
    );

    const others = data.filter(d => 
      !d.job.includes("President") && !d.job.includes("Vice President")
    );

    const sortedOthers = [...others].sort((a, b) => {
      const aIndex = positionPriority.findIndex(pos => a.job.includes(pos));
      const bIndex = positionPriority.findIndex(pos => b.job.includes(pos));
      
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    });

    return {
      presidentsAndVicePresidents: presidentsAndVPs,
      restOfTheTeam: sortedOthers
    };
  }, [props.data]);

  return (
    <>
      <div id="team" className="text-center">
        <div className="container">
          <h2>Meet the Team</h2>
          <p>
            Our team is a diverse group of individuals working together to achieve our objectives.
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

          <div className="team-grid">
            {restOfTheTeam.map((d, i) => (
              <ProfileCard
                key={`${d.name}-${i}`}
                data={d}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </>
  );
};

export default Team;