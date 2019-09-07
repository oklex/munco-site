import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation'
import NavigationLinks from '../../models/NavigationLinks'

const NavLinks: NavigationLinks[] = [
  {
    link: "/",
    title: "Home"
  },
  {
    link: "/features",
    title: "Features"
  },
  {
    link: "/calendar",
    title: "Calendar"
  }
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
