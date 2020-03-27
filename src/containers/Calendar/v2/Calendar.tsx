import React from "react";
import CalendarCard from "../../../components/SingleEventLink/v2/CalendarCard";
import { ICalendarResponse } from "../../../models/CalendarEvent";
import CalendarService from "../../../services/CalendarService/v2/CalendarService";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Calendar.scss";
import FullScreen from "../../../components/SplitScreen/FullScreen";
import Helmet from "react-helmet";
import SplitScreen from "../../../components/SplitScreen/SplitScreen";

interface ICalendarState {
  allCalendarEvents: ICalendarResponse[];
}

// this contains the page
// which contains search selection & carousel that contains Calendar cards
export class CalendarV2 extends React.Component<{}, ICalendarState> {
  state = {
    allCalendarEvents: []
  };

  componentDidMount = async () => {
    const allCalendarEvents: ICalendarResponse[] = await CalendarService.getAll();
    this.setState({
      allCalendarEvents: allCalendarEvents
    });
  };

  renderArrow = (text: string, className: string) => {
    return <div className={className}>{text}</div>;
  };

  showAllCards = () => {
    if (this.state.allCalendarEvents.length === 0) {
      return (
        <div>
          <h1>LOADING . . . </h1>
        </div>
      );
    } else {
      return this.state.allCalendarEvents.map(
        (event: ICalendarResponse, key: number) => {
          if (!event.applications || (event.applications && event.applications.length == 0)) {
            return <div key={key}></div>; // omit no applications
          } else {
            return <CalendarCard key={key} CardDetails={event} />;
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="ConferenceCalendar">
        <Helmet>
          <title>Conference Applications</title>
          <meta
            name="description"
            content="Calendar for Model UN conferences in BC and internationally. See all dates and site links and more."
          />
          <link rel="canonical" href="https://wwww.munco.ca/calendar" />
        </Helmet>
        <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={true}>
            <div className="fixed-cover">
              <div className="title">
                <h1>Conference Applications</h1>
                <p className="menu-button">Do you manage a conference?</p>
                <p className="menu-button">Report a problem</p>
              </div>
            </div>
          </SplitScreen>

          <SplitScreen hideOnWrap={false}>
            <div className="calendar-section">{this.showAllCards()}</div>
          </SplitScreen>
        </FullScreen>
      </div>
    );
  }
}

export default CalendarV2;

/* 
use: npm 
react-horizontal-scrolling-menu
*/
