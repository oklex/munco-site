import MobileNavigation from "./MobileNavigation";
import INavigationTypes from "../../models/NavigationLinks";
import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import CheckIfMobile from '../../utils/checkIfMobile'

export interface INavigationProps {
  links: INavigationTypes[];
  socialMedia: INavigationTypes[];
  hideButtons?: boolean;
}

export interface INavigationState {
  isMobile: boolean;
}

class NavigationSuper extends React.Component<
  INavigationProps,
  INavigationState
> {
  state = {
    isMobile: true
  };

  componentDidMount = () => {
    this.setState({
      isMobile: CheckIfMobile()
    });
  };

  showNavigation = () => {
    if (this.state.isMobile) {
      return (
        <MobileNavigation
          links={this.props.links}
          socialMedia={this.props.socialMedia}
        />
      );
    } else {
      return (
        <DesktopNavigation
          links={this.props.links}
          socialMedia={this.props.socialMedia}
        />
      );
    }
  };

  render() {
    return this.showNavigation();
  }
}

export default NavigationSuper;

/* 
- if the page is NOT mobile && not homepage -> then display new nav
*/
