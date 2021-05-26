import React from "react";
import "./UI/Footer.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <div className="footer">
        <Link to={scrollToTop}>
          <div onClick={scrollToTop} className="scroll_to_top">
            Back to Top
          </div>
        </Link>
        <br></br>
        <center>
          <p>Copyright amazon_clone, All rights reserved 2021</p>
        </center>
      </div>
    </Fragment>
  );
}

export default Footer;
