import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Desk } from "./components/Desk";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";


const Home = ({ landingPageData }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <div id="features">
        {landingPageData.Features && <Desk data={landingPageData.Features} />}
      </div>
      <div id="about">
        {landingPageData.About && <About data={landingPageData.About} />}
      </div>
      <div id="team">
        {landingPageData.Team && <Team data={landingPageData.Team} />}
      </div>
      <div id="contact">
        {landingPageData.Contact && <Contact data={landingPageData.Contact} />}
      </div>
    </>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home landingPageData={landingPageData} />} />
          <Route
            path="/gallery"
            element={<Gallery data={landingPageData.Gallery || []} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
