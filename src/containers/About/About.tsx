import React from "react";
import "./About.scss";
import AllApplications from "../../components/AllApplications/AllApplications";
import ApplicationDetails from "../../models/ApplicationDetails";
import Helmet from "react-helmet";
import ImgWrapper from "../../components/ImgWrapper";

// const Logo: string = "/brand/logo.svg";
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
        role: "IT Director"
      },
      {
        name: "Sanya Grover",
        portraitId: SanyaPortraitId,
        role: "Administrative Director"
      },
      {
        name: "Andrew Huang",
        portraitId: AndrewPortraitId,
        role: "Community Director"
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
          <ImgWrapper
            mediaId={mediaId}
            height={300}
            className={"portrait-img"}
          />
          <div className="overlay"></div>
        </div>
      );
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
        {/* <Link to="/">
          <img className="logo" src={Logo} alt="munco brand logo" />
        </Link> */}
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
                <h3 className="neutralText">
                  We strive to create meaningful connections between the
                  delegates, conferences, and school club executives.{" "}
                </h3>
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
                  <p>
                    We're shining light on some of the prominent role models in
                    our community - to share their stories, their struggles, and
                    lessons learned along the way.
                  </p>
                </div>
                <div className="grey-box">
                  <div className="status-symbol-yellow" />
                  in-progress
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">MUNCO access</h4>
                  <p>
                    We're creating a registration system/backgrounder system to
                    help staff and secretariat better understand and communicate
                    with their delegates, as well as enable data-based feedback
                    on delegate engagement.
                  </p>
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
                  <p>
                    Club leaders already contribute so much to their own clubs
                    that we feel driven to lend them a hand. By connecting
                    community leaders we hope to empower those club leaders who
                    hold our communtiy up.
                  </p>
                </div>
                <div className="grey-box">
                  <div className="status-symbol-grey" />
                  on-hold
                </div>
              </div>
              <div className="col-md-6">
                <div className="grey-box-main">
                  <h4 className="darkText">More +</h4>
                  <p>
                    We're always researching new ways to enhance the student
                    experience in Model UN. Follow us on social media for
                    updates, and feel free to send us a message with your
                    thoughts!
                  </p>
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
    title: "Content Creator",
    description:
      "We're hiring a student who feels passionately about connecting the community to help drive our 'Student Features' project to life. As a part of our team, you would play a critical role in enhancing the quality and efficiency of our editorial process. \nSuccessful applicants will have the opportunity to grow within the role, with unique opportunities for students interested in data-driven business decisions.",
    applicationLink: 'https://forms.gle/Crvb2N31gTfnJQNJA',
  },
  {
    title: "Design and Technology",
    description:
      "Interested in web-design? We're looking to fill a flexible role and train a student to contribute towards our design and development process for ouir 'MUNCO Access' project. Applicants will have an opportunity to experience professional design and development processes and learn as much code as they are comfortable with. \nThis position is great for anyone intersted in pursuing a career in software development and/or professional design.",
    applicationLink: 'https://forms.gle/Crvb2N31gTfnJQNJA',
  },
  // {
  //   title: "Community",
  //   description:
  //     "Interested in bringing new projects into the Model UN community? We are too! And we're hoping to work with more students who can help us bring a new assortment of workshops and help us conduct research on students needs and wants.",
  //   applicationLink: 'https://forms.gle/Crvb2N31gTfnJQNJA',
  // }
];
