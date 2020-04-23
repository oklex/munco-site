import React from "react";
import {
  ICalendarResponse,
  IApplicationEvent,
} from "../../models/CalendarEvent";
import CalendarService from "../../services/CalendarService/v2/CalendarService";
import CalendarCard from "../../components/SingleEventLink/v2/CalendarCard";

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
    loading: false,
  };

  componentDidMount = async () => {
    let upcoming = await CalendarService.getUpcoming();
    this.setState({
      upcomingApplications: upcoming
    });
  };

  showUpcomingApps = () => {
    if (this.state.loading) {
      return <p> Loading . . .</p>;
    } else if (this.state.upcomingApplications == []) {
      return (
        <div>
          <h1>oops &#128552;</h1>
          <p>
            looks like there's nothing here <br />
            check back later!
          </p>
        </div>
      );
    } else {
      return this.state.upcomingApplications.map(
        (conference: ICalendarResponse, index: number) => {
          return (
            <div key={index} className="col-md-6">
              <CalendarCard CardDetails={conference} />
            </div>
          );
        }
      );
    }
  };

  render() {
    return <div className="row">{this.showUpcomingApps()}</div>;
  }
}

export default UpcomingApplications;
