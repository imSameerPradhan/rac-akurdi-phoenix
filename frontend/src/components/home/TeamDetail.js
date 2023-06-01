import React, {useState} from 'react'
import { Link } from "react-router-dom";
import President from "../../assets/president.png"
// import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
// import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import teamDefault from '../../assets/teamDefault.png';

function TeamDetail({teamsDetail}) {
    const { fullname, image, instaSrc, fbSrc } = teamsDetail;
  return (
    <div>
        <div className="team-main">
        <div className="team-container">
            <div className="card">
            <div className="content">
                <img src={image.includes('http')?image:teamDefault} alt="Team" width="300px" height="350px" />
                <h2>{fullname}</h2>
                {/* <a
                className="facebook"
                href={fbSrc}
                target="_blank"
                rel="noreferrer"
                >
                <FaFacebook size={30} />
                </a>
                <a
                className="instagram"
                href={instaSrc}
                target="_blank"
                rel="noreferrer"
                >
                <FaInstagram size={30} />
                </a> */}
            </div>
            {/* <Link to={`/team/${name}`}>
                <div className="team">
                <button>View member</button>
                </div>
            </Link> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default TeamDetail