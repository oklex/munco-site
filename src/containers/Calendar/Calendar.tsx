import React from "react";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import "./Calendar.scss";
import CalendarEvent from "../../models/CalendarEvent";
import SingleEventLink from "../../components/SingleEventLink/SingleEventLink";
import CalendarService from "../../services/CalendarService";
import LinkStyle from "../../models/LinkStyle";

const vancouverBg: string = "/img/cambie.jpg";

interface ICalendarState {
  allConferences: CalendarEvent[];
}

class Calendar extends React.Component<{}, ICalendarState> {
  state = {
    allConferences: []
  };

  componentDidMount = async () => {
    var allConferences: any = await CalendarService.getAll();
    if (allConferences) {
      this.setState({
        allConferences: allConferences
      });
    }
  };

  showEvents = () => {
    if (this.state.allConferences.length > 0) {
      return this.state.allConferences.map(
        (event: CalendarEvent, index: number) => {
          if (event.confirmed === true) {
            return (
              <SingleEventLink
                eventDetails={event}
                linkStyle={LinkStyle.vertical}
              />
            );
          } else {
            return <span />;
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="Calendar">
        <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={true}>
            <div className="fixed-cover">
              <div className="banner-img">
                <img
                  src={vancouverBg}
                  alt="street-view-of-cambie-and-14th-avn"
                  className="bg-image"
                />
              </div>
              <div className="overlay">
                <div className="banner-title"><h1>Conference Calendar</h1></div>
              </div>
            </div>
          </SplitScreen>
          <SplitScreen hideOnWrap={false}>
            <div className="read-content">
              <div className="event-list">{this.showEvents()}</div>
            </div>
          </SplitScreen>
        </FullScreen>
      </div>
    );
  }
}

export default Calendar;
