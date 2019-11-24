import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../../components/Navigation/MobileNavigation";
import { INavigationTypes, LinkImportance } from "../../models/NavigationLinks";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";
import Calendar from "../Calendar/Calendar";
import About from "../About/About";
import Helmet from "react-helmet";
import Error404 from "../Error404/Error404";
import NavigationSuper from "../../components/Navigation/NavigationSuper";

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
  }
];

const SocialMediaLinks: INavigationTypes[] = [
  {
    link: "https://www.facebook.com/BCmunco",
    title: "facebook",
    type: LinkImportance.external
  },
  {
    link: "https://www.instagram.com/bc.munco/",
    title: "instagram",
    type: LinkImportance.external
  }
];

class App extends React.Component<{}, {}> {

  showHome = () => {
    return <Home links={NavLinks} socialMedia={SocialMediaLinks} />;
  };
  showFeatures = () => {
    return <Blog />;
  };
  showFeatureById = () => {
    return <BlogPost />;
  };
  showCalendar = () => {
    return <Calendar />;
  };
  showAbout = () => {
    return <About />;
  };
  show404 = () => {
    return <Error404/>
  }

  render() {
    return (
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <div className="App">
          <NavigationSuper links={NavLinks} socialMedia={SocialMediaLinks} />
          <Switch>
            <Route exact path="/" component={this.showHome} />
            <Route exact path="/features" component={this.showFeatures} />
            <Route exact path="/features/:id" component={this.showFeatureById} />
            <Route exact path="/calendar" component={this.showCalendar} />
            <Route exact path="/about" component={this.showAbout} />
            <Route component={this.show404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
