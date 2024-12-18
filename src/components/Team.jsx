import React, { useMemo } from "react";

export const Team = (props) => {
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
            <div
              key={`${d.name}-${i}`}
              className={`profile-card ${
                i === 0 ? "first-row-left" : "first-row-right"
              }`}
            >
              <div className="img">
                <img src={d.img || "./man.jpg"} alt={d.name} loading="lazy" />
              </div>
              <div className="caption">
                <h3>{d.name}</h3>
                <p>{d.job}</p>
                <div className="social-links">
                  <a
                    href={d.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a href={d.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href={d.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {restOfTheTeam.length > 0 ? (
          <div className="team-grid">
            {restOfTheTeam.map((d, i) => (
              <div key={`${d.name}-${i}`} className="profile-card">
                <div className="img">
                  <img src={d.img || "./man.jpg"} alt={d.name} loading="lazy" />
                </div>
                <div className="caption">
                  <h3>{d.name}</h3>
                  <p>{d.job}</p>
                  <div className="social-links">
                    <a
                      href={d.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a
                      href={d.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                    <a
                      href={d.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
