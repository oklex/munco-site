import React from "react";
import "./About.scss";
import AllApplications from "../../components/AllApplications/AllApplications";
import ApplicationDetails from "../../models/ApplicationDetails";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import ImgWrapper from "../../components/ImgWrapper";
// import { RouteComponentProps } from "react-router-dom";

// interface IAboutProps extends RouteComponentProps {}

const Logo: string = "/brand/logo.svg";
const Quotation: string = "/icons/quotation.svg";
const AndrewPortraitId: number = 13;
const AlexPortraitId: number = 15;
const SanyaPortraitId: number = 14;

interface IPersonBox {
  name: string;
  portraitId: number;
  role: string;
}

interface IAboutState {
  team: IPersonBox[];
}

class About extends React.Component<{}, IAboutState> {
  // get the props for the page number or id?
  state: IAboutState = {
    team: [
      {
        name: "Alexander Kim",
        portraitId: AlexPortraitId,
        role: "Director"
      },
      {
        name: "Sanya Grover",
        portraitId: SanyaPortraitId,
        role: "Director"
      },
      {
        name: "Andrew Huang",
        portraitId: AndrewPortraitId,
        role: "Director"
      }
    ]
  };

  componentDidMount = async () => {
    document.body.scrollTop = 0;
  };

  showPortraitIfExists = (teamId: number) => {
    const mediaId = this.state.team[teamId].portraitId;
    if (mediaId) {
      return (
      <div className="portrait-circle">
        <ImgWrapper mediaId={mediaId} height={300} className={"portrait-img"} />
        <div className="overlay"></div>
      </div>)
    } else {
      return <div></div>;
    }
  };

  showTeamMembers = () => {
    var team: IPersonBox[] = this.state.team;
    return team.map((member: IPersonBox, index: number) => {
      return (
        <div className="col-sm-4 person-box" key={index}>
          <div className="portrait">{this.showPortraitIfExists(index)}</div>
          <div className="name">
            <h4>{member.name}</h4>
          </div>
          <div className="position">
            <p className="blueText">{member.role}</p>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div id="About">
        <Helmet>
          <title>About MUNCO</title>
          <meta
            name="description"
            content="MUNCO is the community hub for everything model united nation in british columbia. See what we're up to."
          />
        </Helmet>
        <Link to="/">
          <img className="logo" src={Logo} alt="munco brand logo" />
        </Link>
        <div className="full-page" id="team">
          <div className="container">
            <div className="section-title">
              <h1>The Team</h1>
              <p className="blueText">discover what we're passionate about</p>
            </div>
            <div className="quote-banner">
              <img
                className="quotation"
                src={Quotation}
                alt="quotation mark"
              ></img>
              <div className="quote">
                <h3>Some quote here</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              {this.showTeamMembers()}
            </div>
          </div>
        </div>

        <div className="full-page" id="projects">
          <div className="container">
            <div className="section-title">
              <h1>Projects</h1>
              <p className="blueText">enhancing the community</p>
            </div>
            <div className="row projects">
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">Student Features</h4>
                  <p>desc.</p>
                </div>
                <div className="grey-box">
                  <div className="status-symbol-yellow" />
                  in-progress
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">MUNCO access</h4>
                  <p>desc.</p>
                </div>
                <div className="grey-box">
                  <div className="status-symbol-grey" />
                  prototyping
                </div>
              </div>
            </div>
            <div className="row projects">
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">Clubs directory</h4>
                  <p>desc.</p>
                </div>
                <div className="grey-box">
                  <div className="status-symbol-grey" />
                  on-hold
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">More +</h4>
                  <p>desc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="full-page" id="apply">
          <div className="container">
            <div className="section-title">
              <h1>Be a part of MUNCO</h1>
              <p className="blueText">apply for unique positions</p>
            </div>
            <div>
              <AllApplications apps={Applications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

const Applications: ApplicationDetails[] = [
  {
    title: "Social Media manager",
    description: "string"
    // applicationLink: 'string',
  },
  {
    title: "IT apprentice",
    description: "string"
    // applicationLink: 'string',
  },
  {
    title: "Community Coordinator",
    description: "string"
    // applicationLink: 'string',
  }
];
