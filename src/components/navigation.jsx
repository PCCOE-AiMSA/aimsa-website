import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">TOGGLE NAVIGATION</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand"  >
            <img className="imgg" src="./img/Aimsa.png" alt="AIMSA LOGO" onClick={()=>handleNavigation("header")} />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button
                onClick={() => handleNavigation("desk")}
                className="nav-item-link"
              >
                <strong>FROM THE DESK</strong>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("about")}
                className="nav-item-link"
              >
                <strong>ABOUT US</strong>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("team")}
                className="nav-item-link"
              >
                <strong>TEAM</strong>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/junior-executives")}
                className="nav-item-link"
              >
                <strong>Junior Team</strong>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("contact")}
                className="nav-item-link"
              >
                <strong>CONTACT</strong>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/gallery")}
                className="nav-item-link"
              >
                <strong>GALLERY</strong>
              </button>
            </li>
            
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="nav-item-link"
              >
                <strong>ARTIMAS</strong>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
