import React from "react";
import classes from "./footer.module.css";

const Footer = props => (
  <div className={classes.footer}>
    <p className={classes.footer__link}>
    {/*Licensed under MIT. Contribute to the project at{" "}*/}
      <span>
        {/*<a
          href="https://github.com/abhi15sep"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.footer__link}
        >
          GitHub
        </a>*/} 
        Under Development...
      </span>
    </p>
  </div>
);

export default Footer;
