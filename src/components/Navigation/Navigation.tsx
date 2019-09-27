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
  hideButtons?: boolean;
}

interface INavigationState {
  show: boolean;
  interacted: boolean;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  state = {
    show: false,
    interacted: false,
  };

  openNavigation = () => {
    //console.log("open nav");
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
    //console.log("close nav");
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
          <li key={index}>
            <Link
              to={link.link}
              className={"highlight-link" + this.getLinkAnimation()}
              onClick={() => this.closeNavigation()}
            >
              <h2>{link.title}</h2>
            </Link>
          </li>
        );
      }
      default: {
        return (
          <li key={index}>
            <Link
              to={link.link}
              className={this.getLinkAnimation()}
              onClick={() => this.closeNavigation()}
            >
              <h3>{link.title}</h3>
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

  showCloseButton = () => {
    if (!this.props.hideButtons) {
      return (
        <div className="">
          <Link to="/" onClick={() => this.closeNavigation()}>
            <img className="logo" src={Logo} alt="munco brand logo" />
          </Link>
          <div className="btn-nav">
            <button className="btn-full" onClick={() => this.closeNavigation()}>
              <img
                src={closeIcon}
                alt="close-navigation"
                className="btn-closeNav"
              />
            </button>
          </div>
        </div>
      );
    } else return <div></div>;
  };

  showOpenButton = () => {
    return (
      <div className="d-flex flex-row-reverse">
        <div className="btn-nav">
          <button className="btn-full" onClick={() => this.openNavigation()}>
            <img
              src={HamburgerIcon}
              alt="close-navigation"
              className="btn-closeNav"
            />
          </button>
        </div>
      </div>
    );
  };

  showNavigation = () => {
    if (this.state.interacted) {
      return (
        <div id="nav-content" className={this.getNavAnimation()}>
          {this.showCloseButton()}
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
      <div id="Navigation" className="short-link">
        {this.showOpenButton()}
        {this.showNavigation()}
      </div>
    );
  }
}

export default Navigation;
