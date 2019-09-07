import React from "react";
import "./Navigation.scss";
import INavigationTypes from "../../models/NavigationLinks";
import { Link } from "react-router-dom";

interface INavigationProps {
  links: INavigationTypes[];
}

interface INavigationState {
  thePosition: number;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  state = {
    thePosition: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      thePosition: scrolled
    });
  };

  updateBackground = () => {
    if (this.state.thePosition > 0) {
      console.log("scrolled");
      return " whiteBackground";
    } else {
      return "";
    }
  };

  returnNavOptions = () => {
    return this.props.links.map(link => {
      return <Link to={link.link}>{link.title}</Link>;
    });
  };

  render() {
    return (
        <div id="Navigation" className={"navbar" + this.updateBackground()}>
          <div id="logo">{this.state.thePosition}</div>
          <div>
            <ul>{this.returnNavOptions()}</ul>
          </div>
        </div>
    );
  }
}

export default Navigation;
