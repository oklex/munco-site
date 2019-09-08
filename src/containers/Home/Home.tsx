import React from "react";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import "./Home.scss";
import INavigationTypes, { LinkImportance } from "../../models/NavigationLinks";
import { Link } from "react-router-dom";

const vancouverBg: string = '/img/cambie.jpg'
const logo: string = '/brand/white-logo.png'

interface IHomeProps {
  links: INavigationTypes[];
  socialMedia: INavigationTypes[];
}

class Home extends React.Component<IHomeProps, {}> {
  returnNavOptions = () => {
    // change the style of the return value based on the classification
    return this.props.links.map(this.returnSingleNavOption);
  };

  returnSingleNavOption = (link: INavigationTypes, index: number) => {
    switch (link.type) {
      case LinkImportance.major: {
        return (
          <li>
            <Link key={index} to={link.link}>
              <h4>{link.title}</h4>
            </Link>
          </li>
        );
      }
      default: {
        return (
          <li>
            <Link key={index} to={link.link}>
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
    return (
      <div id="nav-content">
        <div className="d-flex justify-content-left">
          <div className="main-nav-links">
            <ul>{this.returnNavOptions()}</ul>
          </div>
        </div>
        <div className="d-flex justify-content-left">
          <div className="social-media-links">
            <ul>{this.returnSocialMedia()}</ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="home-hero">
        <FullScreen hideOnMobile={false}>
          <SplitScreen>
            <div className="hero-banner">
              <img src={vancouverBg} alt='street-view-of-cambie-and-14th-avn' className='bg-image'/>
              <div className="overlay">
                <img src={logo} alt='white-munco-logo' className='banner-logo'/>
                <div className='banner-title lightText'>
                   <h4>Community Starts here</h4> 
                </div>
              </div>
            </div>
          </SplitScreen>
          <SplitScreen hideOnWrap={true}>
            <div className='side-nav'>
                {this.showNavigation()}
            </div>
          </SplitScreen>
        </FullScreen>

        <div className='container'>
          <h4>Upcoming conferences</h4>
          <p>list</p>
        </div>
        <div className='container'>
          <h4>Student features</h4>
          <p>list</p>
        </div>
      </div>
    );
  }
}

export default Home;
