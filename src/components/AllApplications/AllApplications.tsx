import React from "react";
import ApplicationDetails from "../../models/ApplicationDetails";
import './AllApplications.scss'

// get all applications
// create tabs
// manage which one is active/selected
interface IAllApplicationProps {
  apps: ApplicationDetails[];
}

interface IAllApplicationState {
  selectedId: number;
}

class AllApplications extends React.Component<
  IAllApplicationProps,
  IAllApplicationState
> {
  state = {
    selectedId: 0
  };

  switchId = (index: number) => {
    if (index < this.props.apps.length) {
      this.setState({
        selectedId: index
      });
    }
    console.log("switching tab to id: ", index);
  };

  showTabs = () => {
    var ifActive: string = "";
    return this.props.apps.map((app: ApplicationDetails, index: number) => {
      if (this.state.selectedId == index) {
        ifActive = " active";
      } else {
        ifActive = "";
      }
      return (
        <li key={index} className="nav-item ">
          <div
            className={"nav-link " + ifActive}
            onClick={() => this.switchId(index)}
          >
            <h4>{app.title}</h4>
          </div>
        </li>
      );
    });
  };

  getApplicationDescription = () => {
    const id: number = this.state.selectedId;
    const info: ApplicationDetails = this.props.apps[id];
    var link: string = "";
    if (info.applicationLink) {
      link = info.applicationLink;
    }
    return (
      <div>
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        {(link !== '' && <button className="btn btn-outline-dark"><a href={link} target='_blank'>Apply now</a></button>)}
      </div>
    );
  };

  render() {
    return (
      <div className='AllApplications'>
        <ul className="nav nav-tabs">{this.showTabs()}</ul>
        <div className="app-content">{this.getApplicationDescription()}</div>
      </div>
    );
  }
}

export default AllApplications;
