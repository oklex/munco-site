import React from "react";
import {
  ICalendarResponse,
  IApplicationEvent
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
    loading: true
  };

  componentDidMount = async () => {
    let upcoming = await CalendarService.getUpcoming();
    if (upcoming.length != 0) {
      this.setState({
        upcomingApplications: upcoming,
        loading: false
      });
    }
  };

  showUpcomingApps = () => {
    if (this.state.loading) {
      return <p> Loading . . .</p>;
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
    return (
      <div className='row'>
          {this.showUpcomingApps()}
      </div>
    );
  }
}

export default UpcomingApplications;
