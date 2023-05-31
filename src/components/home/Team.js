import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Team.css";
import TeamDetail from "./TeamDetail";

function Team() {
  const teams = [
    {
      name: "Pushparaj Patel",
      instaSrc:
        "https://www.instagram.com/dreamlifearts_tattoos_pune_/?igshid=YmMyMTA2M2Y=",
      fbSrc:
        "https://www.facebook.com/dreamlifearts_tattoos_pune-105601871172802/",
      imgSrc:
        "https://ik.imagekit.io/odme7nhvr/WhatsApp_Image_2023-05-31_at_11.16.35_AM.jpeg",
    },
    {
      name: "Gauri Tandale",
      instaSrc:
        "https://www.instagram.com/dreamlifearts_tattoos_pune_/?igshid=YmMyMTA2M2Y=",
      fbSrc:
        "https://www.facebook.com/dreamlifearts_tattoos_pune-105601871172802/",
      imgSrc:
        "https://ik.imagekit.io/odme7nhvr/WhatsApp_Image_2023-05-31_at_1.01.53_AM.jpeg",
    },
    {
      name: "Chetna Lanjewar",
      instaSrc:
        "https://www.instagram.com/dreamlifearts_tattoos_pune_/?igshid=YmMyMTA2M2Y=",
      fbSrc:
        "https://www.facebook.com/dreamlifearts_tattoos_pune-105601871172802/",
      imgSrc:
        "https://ik.imagekit.io/odme7nhvr/WhatsApp_Image_2023-05-31_at_1.01.55_AM.jpeg",
    },
  ];

  const [goToTeam, setGoToTeam] = useState(false);

  if (goToTeam) {
    return <Navigate to="/team" />;
  }

  return (
    <div>
      <div className="team" id="team">
        {/* <ImageKit path="tattoo49.jpg" /> */}
        {teams.length === 0 ? (
          <div className="team-container">
            {/* --------------CARD STARTS---------- */}
            <div className="card">
              <div className="content">
                <img src="" alt="Team" width="150px" height="250px" />
                <h2>Pushparaj Patel</h2>
                {/* <a
                  className="facebook"
                  href="https://business.facebook.com/Inkronicle-Tattoo-100734155945680/?business_id=1103419690207120"
                  target="_blank"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/inkronicletattoo/"
                  target="_blank"
                >
                  <FaInstagram size={30} />
                </a> */}
              </div>
            </div>
          </div>
        ) : (
          teams.map((teamsDetail) => {
            return (
              <TeamDetail teamsDetail={teamsDetail} key={teamsDetail._key} />
            );
          })
        )}
      </div>
      <div className="btn-teams">
        <button
          onClick={() => {
            setGoToTeam(true);
            window.scrollTo(0, 0);
          }}
        >
          View Whole Team
        </button>
      </div>
    </div>
  );
}

export default Team;
