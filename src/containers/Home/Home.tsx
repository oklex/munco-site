import React from "react";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import "./Home.scss";
import INavigationTypes, { LinkImportance } from "../../models/NavigationLinks";
import { Link } from "react-router-dom";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import SingleBlogLink from "../../components/SingleBlogLink/SingleBlogLink";
import LinkStyle from "../../models/LinkStyle";
import Helmet from "react-helmet";
// @ts-ignore
import { SocialIcon } from "react-social-icons";
import UpcomingApplications from "./UpcomingApplications";

const vancouverBg: string = "/img/cambie.jpg";
const logoWhite: string = "/brand/white-logo.png";
const logoColour: string = "/brand/logo.svg";

interface IHomeProps {
  links: INavigationTypes[];
  socialMedia: INavigationTypes[];
}

interface IHomeState {
  blogPosts: SingleBlogPost[];
}

class Home extends React.Component<IHomeProps, IHomeState> {
  state = {
    blogPosts: []
  };

  componentDidMount = async () => {
    document.body.scrollTop = 0;
    // window.scrollTo(0, 0);
    // load in the blog posts
    var blogPosts: SingleBlogPost[] = await BlogService.getMostRecent();
    // console.log(upcomingConferences)
    this.setState({
      blogPosts: blogPosts
    });
  };

  showBlogPosts = () => {
    if (this.state.blogPosts.length === 0) {
      return (
        <div className="d-flex flex-wrap justify-content-left">
          <p>
            Oops :( there's a problem with our server. <br />
            Try again later.
          </p>
        </div>
      );
    } else if (this.state.blogPosts.length > 0) {
      return this.state.blogPosts.map((post: SingleBlogPost, index: number) => {
        if (post.status === "publish") {
          return (
            <div key={index}>
              {/* <h3>{post.title.rendered}</h3> */}
              <SingleBlogLink post={post} style={LinkStyle.vertical} />
            </div>
          );
        } else {
          return <div></div>;
        }
      });
    } else {
      return <div></div>;
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
            <Link to={link.link}>
              <h2>{link.title}</h2>
            </Link>
          </li>
        );
      }
      default: {
        return (
          <li key={index}>
            <Link to={link.link}>
              <h3>{link.title}</h3>
            </Link>
          </li>
        );
      }
    }
  };

  returnSocialMedia = () => {
    return this.props.socialMedia.map((link, index) => {
      return <SocialIcon key={index} url={link.link} />;
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
            <ul>
              {this.returnSocialMedia()}
              <span className="hero-email">contact@munco.ca</span>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="home-hero">
        <Helmet>
          <title>MUNCO - british columbia's model un community</title>
          <meta
            name="description"
            content="MUNCO is the community hub for everything model united nation in british columbia."
          />
          <meta property="og:title" content="MUNCO" />
          <link rel="canonical" href="https://wwww.munco.ca/" />
          <meta property="og:img" content={logoColour} />
        </Helmet>
        <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={false}>
            <div className="hero-banner">
              <img
                src={vancouverBg}
                alt="street-view-of-cambie-and-14th-avn"
                className="bg-image"
              />
              <div className="overlay">
                <img
                  src={logoWhite}
                  alt="white-munco-logo"
                  className="banner-logo"
                />
                <div className="banner-title lightText">
                  <h1>Community Starts here</h1>
                </div>
              </div>
            </div>
          </SplitScreen>
          <SplitScreen hideOnWrap={true}>
            <div className="side-nav">{this.showNavigation()}</div>
          </SplitScreen>
        </FullScreen>

        {/* <div className="conferenceSection">
          <div className="container">
            <div className="section-title">
              <h2>Upcoming conferences</h2>
              <div className="blueText">
                <Link to="/calendar">
                  <p>see all conferences &gt;</p>
                </Link>
              </div>
            </div>
            <UpcomingConferences />
          </div>
        </div> */}

        <div className="conferenceSection">
          <div className="container">
            <UpcomingApplications />
          </div>
        </div>

        <div className="featureSection">
          <div className="container">
            <div className="section-title">
              <h2>Student features</h2>
              <div className="blueText">
                <Link to="/features">
                  <p>see all features &gt;</p>
                </Link>
              </div>
            </div>
            <div className="d-flex flex-wrap">{this.showBlogPosts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
