import React from "react";
import "./myStyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
                  <h3>My FED Blog</h3>
                  <p>Page Credits :CHUNDU SANDHYA ~20BQ1A0544</p>
            <p>copyright &copy; {new Date().getFullYear()} <a href=""> FED Blog</a>  </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
