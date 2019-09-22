import React from "react";
import CalendarEvent from "../../models/CalendarEvent";
import CalendarService from "../../services/CalendarService";
import LinkStyle from "../../models/LinkStyle";
import SingleEventLink from "../../components/SingleEventLink/SingleEventLink";

interface IUpcomingState {
  upcomingConferences: CalendarEvent[];
}

class UpcomingConferences extends React.Component<{}, IUpcomingState> {
  state: IUpcomingState = {
    upcomingConferences: []
  };

  componentDidMount = async () => {
    var upcomingConferences: CalendarEvent[] = await CalendarService.getUpcoming();
    this.setState({
      upcomingConferences: upcomingConferences
    });
  };

  showUpcomingEvents = () => {
    if (this.state.upcomingConferences.length > 0) {
      return this.state.upcomingConferences.map(
        (event: CalendarEvent, index: number) => {
          if (event.confirmed === true) {
            return (
              <SingleEventLink
                key={index}
                eventDetails={event}
                linkStyle={LinkStyle.horizontal}
              />
            );
          } else {
            return <span key={index} />;
          }
        }
      );
    }
  };

  render() {
    return <div className="row">{this.showUpcomingEvents()}</div>;
  }
}

export default UpcomingConferences;
