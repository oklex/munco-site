import React from "react";
import { ICalendarResponse } from "../../models/CalendarEvent";
import CalendarService from "../../services/CalendarService/v2/CalendarService";
import CalendarCard from "../../components/SingleEventLink/v2/CalendarCard";
import { Link } from "react-router-dom";

interface IUpcomingApplicationsState {
  upcomingApplications: ICalendarResponse[];
  loading: boolean;
}

class UpcomingApplications extends React.Component<
  {},
  IUpcomingApplicationsState
> {
  state: IUpcomingApplicationsState = {
    upcomingApplications: [],
    loading: true,
  };

  componentDidMount = async () => {
    await CalendarService.getUpcoming()
      .then((res) => {
        this.setState({
          upcomingApplications: res,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          upcomingApplications: [],
          loading: false,
        });
      });
  };

  showUpcomingApps = () => {
    if (this.state.loading) {
      return <p> Loading . . .</p>;
    } else if (this.state.upcomingApplications === []) {
      return (
        <div>
          {/* <h1>oops &#128552;</h1>
          <p>
            looks like there's nothing here <br />
            check back later!
          </p> */}
        </div>
      );
    } else {
      return (
        <div>
          <div className="section-title">
            <h2>Upcoming Applications</h2>
            <div className="blueText">
              <Link to="/calendar">
                <p>see all applications &gt;</p>
              </Link>
            </div>
          </div>
		  <div className="row">
          {this.state.upcomingApplications.map(
            (conference: ICalendarResponse, index: number) => {
              return (
                <div key={index} className="col-md-6">
                  <CalendarCard CardDetails={conference} />
                </div>
              );
            }
          )}</div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>{this.showUpcomingApps()}</div>
      </div>
    );
  }
}

export default UpcomingApplications;
