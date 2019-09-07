import React from "react";
import "./Navigation.scss";
import INavigationTypes from "../../models/NavigationLinks";
import { Link } from "react-router-dom";

interface INavigationProps {
  links: INavigationTypes[];
}

interface INavigationState {
  thePosition: number;
  show: boolean;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  state = {
    thePosition: 0,
    show: false
  };

  toggleNavigation = () => {
    const was = this.state.show;
    this.setState({
      show: !was
    });
  };

  returnNavOptions = () => {
    // change the style of the return value based on the classification
    return this.props.links.map(link => {
      return <Link to={link.link}>{link.title}</Link>;
    });
  };

  showNavigation = () => {
    if (this.state.show) {
      
    return (
      <div>
        <ul>{this.returnNavOptions()}</ul>
      </div>
    )
    } else {
      return <div></div>
    }
  };

  render() {
    return (
      <div id="Navigation">
        <div id='btn-nav'><button onClick={() => this.toggleNavigation()}>hamburger</button></div>
        {this.showNavigation()}
      </div>
    );
  }
}

export default Navigation;
