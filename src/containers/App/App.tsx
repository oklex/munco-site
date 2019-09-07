import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation'
import {INavigationTypes, LinkImportance} from '../../models/NavigationLinks'

const NavLinks: INavigationTypes[] = [
  {
    link: "/",
    title: "Home",
    type: LinkImportance.minor
  },
  {
    link: "/features",
    title: "Features",
    type: LinkImportance.major
  },
  {
    link: "/calendar",
    title: "Calendar",
    type: LinkImportance.major
  },
  {
    link: "/about",
    title: "About",
    type: LinkImportance.minor
  },
  {
    link: "/social",
    title: "facebook",
    type: LinkImportance.external
  },
];

class App extends React.Component<{}, {}> {
  showHome = () => {
    return <div>Home</div>;
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
          <Navigation links={NavLinks}/>
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
