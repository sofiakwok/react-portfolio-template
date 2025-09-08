import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sofia Kwok</h1>
          <p>Hello! I am an engineer interested in space, robots, and space robots. I currently work at Starfish Space, an in-orbit satellite servicing startup in Seattle. 
            I have a Master of Science in Robotics from Carnegie Mellon University and a Bachelor of Science in Mechanical Engineering from the California Institute of Technology. 
            My past experience includes building a bipedal robot, designing a percussive drill for lunar regolith, and making robot arms that can solve jigsaw puzzles and play Bananagrams.
            For more details, refer to my CV.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/sofiakwok" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sofiakwok/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;