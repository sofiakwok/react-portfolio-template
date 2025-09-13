import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile_pic from '../assets/images/IMG_1906_2.png';

import '../assets/styles/Main.scss';

function CV() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile_pic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sofia Kwok</h1>
          <div className="mobile_social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;