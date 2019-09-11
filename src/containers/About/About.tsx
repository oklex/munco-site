import React from "react";
import "./About.scss";
import MediaItem from "../../models/MediaItem";
// import { RouteComponentProps } from "react-router-dom";

// interface IAboutProps extends RouteComponentProps {}

const Logo: string = "/brand/logo.svg";
const Quotation: string = "/icons/quotation.svg";
const AndrewPortraitId: number = 4853;
const AlexPortraitId: number = 4675;
const SanyaPortraitId: number = 4484;

interface IPersonBox {
  name: string;
  portraitId: number;
  portraitUrl: string | null;
  role: string;
}

interface IAboutState {
  team: IPersonBox[];
}

class About extends React.Component<{}, IAboutState> {
  // get the props for the page number or id?
  state: IAboutState = {
    team: [
      { name: "Alexander Kim", portraitId: AlexPortraitId, portraitUrl: null, role: "Director" },
      { name: "Sanya Grover", portraitId: SanyaPortraitId, portraitUrl: null, role: "Director" },
      { name: "Andrew Huang", portraitId: AndrewPortraitId, portraitUrl: null, role: "Director" }
    ]
  };

  componentDidMount = () => {
    // update the team portraitUrl
  }

  render() {
    return (
      <div id="About">
        <img className="logo" src={Logo} alt="munco brand logo" />
        <div className="full-page">
          <div className="container">
            <div className="section-title">
              <h3>Team</h3>
            </div>
            <div className="quote-banner">
              <img
                className="quotation"
                src={Quotation}
                alt="quotation mark"
              ></img>
              <div className="quote">
                <h5>Some quote here</h5>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4 person-box">
                <div className="portrait">content</div>
              </div>
              <div className="col-sm-4 person-box">Person</div>
              <div className="col-sm-4 person-box">Person</div>
            </div>
          </div>
        </div>

        <div className="full-page">
          <div className="container">
            <div className="section-title">
              <h3>Projects</h3>
            </div>
            <div>hello world</div>
          </div>
        </div>

        <div className="full-page">
          <div className="container">
            <div className="section-title">
              <h3>Apply</h3>
            </div>
            <div>hello world</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
