import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>FROM THE DESK</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="col-xs-12 col-md-6"
                >
                  <img src={d.icon} alt={d.title} className="img-fluid"/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
