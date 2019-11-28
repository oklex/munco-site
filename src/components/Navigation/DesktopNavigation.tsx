import React from "react";
import INavigationTypes from "../../models/NavigationLinks";
import { INavigationProps } from "./NavigationSuper";
import "./DesktopNavigation.scss";
import { Link } from "react-router-dom";

class DesktopNavigation extends React.Component<INavigationProps, {}> {
  returnNavOptions = () => {
    // change the style of the return value based on the classification
    return this.props.links.map(this.returnSingleNavOption);
  };

  returnSingleNavOption = (link: INavigationTypes, index: number) => {
    return (
      <li key={index}>
        <Link to={link.link} className='nav-link'>
          <p>{link.title}</p>
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div id="DesktopNav">
        <div className="d-flex justify-content-center">
          {this.returnNavOptions()}
        </div>
      </div>
    );
  }
}

export default DesktopNavigation;
