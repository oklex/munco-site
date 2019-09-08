import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation'
import {INavigationTypes, LinkImportance} from '../../models/NavigationLinks'
import Home from '../Home/Home'

const NavLinks: INavigationTypes[] = [
  {
    link: "/",
    title: "Home",
    type: LinkImportance.minor
  },
  {
    link: "/features",
    title: "Features+",
    type: LinkImportance.major
  },
  {
    link: "/calendar",
    title: "Calendar+",
    type: LinkImportance.major
  },
  {
    link: "/about",
    title: "About+",
    type: LinkImportance.minor
  }
];

const SocialMediaLinks: INavigationTypes[] = [
  {
    link: 'https://www.facebook.com/BCmunco',
    title: 'facebook',
    type: LinkImportance.external
  },
  {
    link: 'https://www.instagram.com/bc.munco/',
    title: 'instagram',
    type: LinkImportance.external
  },
]

class App extends React.Component<{}, {}> {
  showHome = () => {
    return <Home/>;
  };
  showFeatures = () => {
    return <div>Features</div>;
  };
  showCalendar = () => {
    return <div>Home</div>;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation links={NavLinks} socialMedia={SocialMediaLinks}/>
          <Switch>
            <Route exact path="/" component={this.showHome} />
            <Route path="/features" component={this.showFeatures} />
            <Route path="/calendar" component={this.showCalendar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
