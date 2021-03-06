import React from "react";
import "./Footer.scss";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// @ts-ignore
import { SocialIcon } from "react-social-icons";

// include props here eventually

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row justify-content-around footer short-link">
        <div className="col-sm-4">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/features">
            <h3>Features</h3>
          </Link>
          <Link to="/calendar">
            <h3>Calendar</h3>
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/about/#team">
            <p>+ team</p>
          </Link>
          <Link to="/about/#projects">
            <p>+ projects</p>
          </Link>
          <Link to="/about/#apply">
            <p>+ apply</p>
          </Link>
          <div className="socials">
            <SocialIcon url="https://www.facebook.com/BCmunco"/>
            <SocialIcon url="https://www.instagram.com/bc.munco/"/>
            <SocialIcon url="mailto:contact@munco.ca"/>
            <span className='miniText footer-email'>contact@munco.ca</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
