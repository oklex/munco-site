import React from "react";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import "./Calendar.scss";
import CalendarEvent from "../../models/CalendarEvent";
import SingleEventLink from "../../components/SingleEventLink/SingleEventLink";
import CalendarService from "../../services/CalendarService";
import LinkStyle from "../../models/LinkStyle";
import Helmet from "react-helmet";

const vancouverBg: string = "/img/cambie.jpg";

interface ICalendarState {
  allConferences: CalendarEvent[];
}

class Calendar extends React.Component<{}, ICalendarState> {
  state = {
    allConferences: []
  };

  componentDidMount = async () => {
    document.body.scrollTop = 0;
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
        <Helmet>
          <title>Conferences calendar</title>
          <meta
            name="description"
            content="Calendar for Model UN conferences in BC and internationally. See all dates and site links and more."
          />
          
          <link rel="canonical" href="https://wwww.munco.ca/calendar" />
        </Helmet>
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
                <div className="banner-title">
                  <h1>Conference Calendar</h1>
                </div>
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
