import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <h2>Meet the Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>
      <div className="home-container">
        {props.data ? (
          props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="profile-card">
              <div className="img">
                <img src={d.img || "./man.jpg"} alt={d.name} />
              </div>
              <div className="caption">
                <h3>{d.name}</h3>
                <p>{d.job}</p>
                <div className="social-links">
                  <a href= {d.linkedin} target="_blank"><i className="fa fa-linkedin-square"></i></a>
                  <a href= {d.githu} target="_blank"><i className="fa fa-github"></i></a>
                  <a href= {d.instagram} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
