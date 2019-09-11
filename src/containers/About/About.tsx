import React from "react";
import "./About.scss";
import GetMedia from "../../utils/GetMediaUrlById";
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
      {
        name: "Alexander Kim",
        portraitId: AlexPortraitId,
        portraitUrl: null,
        role: "Director"
      },
      {
        name: "Sanya Grover",
        portraitId: SanyaPortraitId,
        portraitUrl: null,
        role: "Director"
      },
      {
        name: "Andrew Huang",
        portraitId: AndrewPortraitId,
        portraitUrl: null,
        role: "Director"
      }
    ]
  };

  componentDidMount = async () => {
    // update the team portraitUrl
    var team: IPersonBox[] = this.state.team;
    var i: number;
    for (i = 0; i < team.length; i++) {
      try {
        const thisMember: IPersonBox = team[i];
        const url: any = await GetMedia.byHeight(thisMember.portraitId, 200);
        if (url) {
          // update var team
          team[i].portraitUrl = url;
        }
        console.log("url for media: ", url);
        this.setState({
          team
        });
      } catch (err) {
        console.log("portrait url fetch failed", err);
      }
    }
  };

  showPortraitIfExists = (teamId: number) => {
    const mediaUrl = this.state.team[teamId].portraitUrl;
    if (mediaUrl) {
      console.log("showing image");
      return (
        <div className="portrait-circle">
          <img
            className="portrait-img"
            src={mediaUrl}
            alt={"photo-portrait-of-" + this.state.team[teamId].name}
          ></img>
          <div className="overlay"></div>
        </div>
      );
    } else {
      console.log("no image");
      return <div></div>;
    }
  };

  showTeamMembers = () => {
    var team: IPersonBox[] = this.state.team;
    return team.map((member: IPersonBox, index: number) => {
      return (
        <div className="col-sm-4 person-box">
          <div className="portrait">{this.showPortraitIfExists(index)}</div>
          <div className="name">
            <h6>{member.name}</h6>
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
        <img className="logo" src={Logo} alt="munco brand logo" />
        <div className="full-page">
          <div className="container">
            <div className="section-title">
              <h3>The Team</h3>
              <p className="blueText">discover what we're pssionate about</p>
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
              {this.showTeamMembers()}
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
