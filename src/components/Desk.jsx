import React from "react";

export const Desk = (props) => {
  return (
    <div id="desk" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>FROM THE DESK</h2>
        </div>
        <div className="row" style={{padding: "0 15px"}}>

          {/* First group */}
          <div className="col-md-12 feature-group elm">
            <div className="row">
              {props.data && props.data.slice(0, 2).map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="col-xs-12 col-md-6"
                >
                  <img src={d.icon} alt={d.title} className="img-fluid"/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second group */}
          <div className="col-md-12 feature-group elm">
            <div className="row">
              {props.data && props.data.slice(2, 4).map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="col-xs-12 col-md-6"
                >
                  <img src={d.icon} alt={d.title} className="img-fluid"/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
