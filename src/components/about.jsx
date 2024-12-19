// import React from "react";

// export const About = (props) => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-12 col-md-6">
//             {" "}
//             <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
//           </div>
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//               <h2>About Us</h2>
//               <p>AiMSA is a student association that has been established for the benefit of students in the CSE AIML branch at PCCOE. Our mission is to provide a platform for students to engage in meaningful academic, social, and professional activities that will enhance their educational experience. We aim to create an environment that fosters leaming and growth by organizing workshops, seminars, and guest lectures on various topics related to computer science, artificial intelligence, and machine learning. Additionally, we facilitate opportunities for students to connect with industry professionals and build networks that can lead to future career prospects. Our association is committed to promoting teamwork, leadership, and innovation among our members, and we strive to make a positive impact on the larger community.</p>
//               <div className="col-lg-6 col-sm-6 col-xs-12">
//               <h3>Vison</h3>
//               <p>Vison of aimsa is</p>
//               <h3>Misson</h3>
//               <p>Our mission is</p>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//   )

// };

// import React from "react";

// export const About = (props) => {
//   return (
//     <section id="about">
//       <div className="container">
//         <div className="row">
//           {/* About Image Section */}
//           <div className="col-xs-12 col-md-6">
//             <img
//               src="img\intro-bg.jpg"
//               className="img-responsive"
//               alt="About AiMSA"
//             />
//           </div>

//           {/* About Text Section */}
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//               <h2>About Us</h2>
//               <p>
//                 AiMSA is a student association that has been established for the
//                 benefit of students in the CSE AIML branch at PCCOE. Our mission
//                 is to provide a platform for students to engage in meaningful
//                 academic, social, and professional activities that will enhance
//                 their educational experience. We aim to create an environment
//                 that fosters learning and growth by organizing workshops,
//                 seminars, and guest lectures on various topics related to
//                 computer science, artificial intelligence, and machine learning.
//                 Additionally, we facilitate opportunities for students to
//                 connect with industry professionals and build networks that can
//                 lead to future career prospects. Our association is committed
//                 to promoting teamwork, leadership, and innovation among our
//                 members, and we strive to make a positive impact on the larger
//                 community.
//               </p>
//             </div>

//             <div className="about-extra">
//               <div className="col-lg-6 col-sm-6 col-xs-12">
//                 <h3>Vision</h3>
//                 <p> Our vision </p>
//               </div>
//               <div className="col-lg-6 col-sm-6 col-xs-12">
//                 <h3>Mission</h3>
//                 <p>Our mission</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* About Image Section */}
          <div className="about-image">
            <div className="about-image-container">
              <img
                src="img/intro-bg.jpg"
                alt="About AiMSA"
                className="abt-img"
              />
            </div>
          </div>

          {/* About Text Section */}
          <div className="about-content">
            <div className="about-content-wrapper">
              <h2 className="about-title">About Us</h2>
              <p className="about-text">
                AiMSA is a student association that has been established for the
                benefit of students in the CSE AIML branch at PCCOE. Our mission
                is to provide a platform for students to engage in meaningful
                academic, social, and professional activities that will enhance
                their educational experience. We aim to create an environment
                that fosters learning and growth by organizing workshops,
                seminars, and guest lectures on various topics related to
                computer science, artificial intelligence, and machine learning.
                Additionally, we facilitate opportunities for students to
                connect with industry professionals and build networks that can
                lead to future career prospects. Our association is committed to
                promoting teamwork, leadership, and innovation among our
                members, and we strive to make a positive impact on the larger
                community.
              </p>

              <div className="cards-grid">
                <div className="info-card">
                  <h3>Vision</h3>
                  <p>Our vision</p>
                </div>
                <div className="info-card">
                  <h3>Mission</h3>
                  <p>Our mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
