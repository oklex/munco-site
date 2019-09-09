import React from "react";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import "./Home.scss";
import INavigationTypes, { LinkImportance } from "../../models/NavigationLinks";
import { Link } from "react-router-dom";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import SingleBlogLink, { linkStyle } from "../../components/SingleBlogLink/SingleBlogLink";
import SinglePostWrapper from "../../components/SinglePostWrapper/SinglePostWrapper";

const vancouverBg: string = "/img/cambie.jpg";
const logo: string = "/brand/white-logo.png";

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
    // load in the blog posts
    var blogPosts: SingleBlogPost[] = await BlogService.getMostRecent();
    this.setState({
      blogPosts: blogPosts
    });
    console.log(this.state.blogPosts);
  };

  showBlogPosts = () => {
    if (this.state.blogPosts.length > 0) {
      return this.state.blogPosts.map((post: SingleBlogPost, index: number) => {
        if (post.status === "publish") {
          return (
            <div key={index}>
              {/* <h5>{post.title.rendered}</h5> */}
              <SingleBlogLink
                post={post}
                style={linkStyle.vertical}
              />
            </div>
          );
        } else {
          return <div></div>
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
              <h4>{link.title}</h4>
            </Link>
          </li>
        );
      }
      default: {
        return (
          <li key={index}>
            <Link to={link.link}>
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
              <img
                src={vancouverBg}
                alt="street-view-of-cambie-and-14th-avn"
                className="bg-image"
              />
              <div className="overlay">
                <img
                  src={logo}
                  alt="white-munco-logo"
                  className="banner-logo"
                />
                <div className="banner-title lightText">
                  <h4>Community Starts here</h4>
                </div>
              </div>
            </div>
          </SplitScreen>
          <SplitScreen hideOnWrap={true}>
            <div className="side-nav">{this.showNavigation()}</div>
          </SplitScreen>
        </FullScreen>

        <div className="container">
          <h4>Upcoming conferences</h4>
          <p>list</p>
        </div>
        <div className="container">
          <h4>Student features</h4>
          {this.showBlogPosts()}
        </div>
      </div>
    );
  }
}

export default Home;
