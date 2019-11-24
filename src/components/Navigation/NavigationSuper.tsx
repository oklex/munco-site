import Navigation from "./MobileNavigation";
import INavigationTypes, { LinkImportance } from "../../models/NavigationLinks";
import React from "react";

interface INavigationProps {
  links: INavigationTypes[];
  socialMedia: INavigationTypes[];
  hideButtons?: boolean;
}

class NavigationSuper extends React.Component<INavigationProps, {}> {
  

  render() {
    return <Navigation links={this.props.links} socialMedia={this.props.socialMedia} />;
  }
}

export default NavigationSuper;

/* 
- if the page is NOT mobile && not homepage -> then display new nav
*/