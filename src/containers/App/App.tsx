import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import { INavigationTypes, LinkImportance } from "../../models/NavigationLinks";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";
import Calendar from "../Calendar/Calendar";
import About from '../About/About'

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
    return <Calendar/>;
  };
  showAbout = () => {
    return <About/>
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation links={NavLinks} socialMedia={SocialMediaLinks} />
          <Switch>
            <Route exact path="/" component={this.showHome} />
            <Route exact path="/features" component={this.showFeatures} />
            <Route path="/features/:id" component={this.showFeatureById} />
            <Route exact path="/calendar" component={this.showCalendar} />
            <Route exact path="/about" component={this.showAbout} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
