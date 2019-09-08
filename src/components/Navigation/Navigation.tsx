import React from "react";
import "./Navigation.scss";
import INavigationTypes, { LinkImportance } from "../../models/NavigationLinks";
import { Link } from "react-router-dom";
const closeIcon: string = "/icons/close.svg";
const HamburgerIcon: string = "/icons/hamburger.svg";
const Logo: string = "/brand/logo.svg";

interface INavigationProps {
  links: INavigationTypes[];
  socialMedia: INavigationTypes[];
}

interface INavigationState {
  show: boolean;
  interacted: boolean;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  state = {
    show: false,
    interacted: false
  };

  openNavigation = () => {
    console.log("open nav");
    this.setState({
      show: true
    });
    if (!this.state.interacted) {
      this.setState({
        interacted: true
      });
    }
  };

  closeNavigation = () => {
    console.log("close nav");
    this.setState({
      show: false
    });
  };

  getNavAnimation = () => {
    if (this.state.show) {
      return " slideIn";
    } else {
      return " slideOut";
    }
  };

  getLinkAnimation = () => {
    if (this.state.show) {
      return " fadeIn";
    } else {
      return "";
    }
  };

  returnNavOptions = () => {
    // change the style of the return value based on the classification
    return this.props.links.map(this.returnSingleNavOption);
  };

  returnSingleNavOption = (link: INavigationTypes, index: number) => {
    switch (link.type) {
      case LinkImportance.major: {
        return (
          <li>
            <Link
              key={index}
              to={link.link}
              className={'highlight-link' + this.getLinkAnimation()}
              onClick={() => this.closeNavigation()}
            >
              <h4>{link.title}</h4>
            </Link>
          </li>
        );
      }
      default: {
        return (
          <li>
            <Link
              key={index}
              to={link.link}
              className={this.getLinkAnimation()}
              onClick={() => this.closeNavigation()}
            >
              <h5>{link.title}</h5>
            </Link>
          </li>
        );
      }
    }
  };

  returnSocialMedia = () => {
    return this.props.socialMedia.map((link, index) => {
      return (
        <a key={index} href={link.link}>
          {link.title}
        </a>
      );
    });
  };

  showNavigation = () => {
    if (this.state.interacted) {
      return (
        <div id="nav-content" className={this.getNavAnimation()}>
          <div className="d-flex justify-content-between">
            <img className="logo" src={Logo} alt="munco brand logo"></img>
            <div className="btn-nav">
              <button onClick={() => this.closeNavigation()}>
                <img
                  src={closeIcon}
                  alt="close-navigation"
                  className="btn-closeNav"
                />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="main-nav-links">
              <ul>{this.returnNavOptions()}</ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="social-media-links">
              <ul>{this.returnSocialMedia()}</ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div id="Navigation">
        <div className="d-flex flex-row-reverse">
          <div className="btn-nav">
            <button onClick={() => this.openNavigation()}>
              <img
                src={HamburgerIcon}
                alt="close-navigation"
                className="btn-closeNav"
              />
            </button>
          </div>
        </div>

        {this.showNavigation()}
      </div>
    );
  }
}

export default Navigation;
