import React from "react";

import "./Footer.css";
import logo from "./s-logo black.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer__signature">
        <p class="footer__copyright">
          &copy;
          <img
            src={logo}
            alt="Mahadev Prasad Pal's signature logo"
            class="footer__logo"
          />
          Mahadev Prasad Pal
        </p>
      </footer>
    </div>
  );
};

export default Footer;
