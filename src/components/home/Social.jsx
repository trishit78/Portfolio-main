import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/trishit-bhowmik-a0117421b/" className="home__social-icon" target="_blank">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://twitter.com/trishit_bhowmik" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/trishit78" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
