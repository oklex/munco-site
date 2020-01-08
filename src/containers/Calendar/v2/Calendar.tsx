import React from "react";
import CalendarCard from "../../../components/SingleEventLink/v2/CalendarCard";
import { ICalendarResponse } from "../../../models/CalendarEvent";
import CalendarService from "../../../services/CalendarService/v2/CalendarService";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./Calendar.scss";

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

  showAllCards = () => {
    if (this.state.allCalendarEvents.length === 0) {
      return (
        <div>
          <h1>LOADING . . . </h1>
        </div>
      );
    } else {
      return this.state.allCalendarEvents.map(event => {
        return <CalendarCard CardDetails={event} />;
      });
    }
  };

  render() {
    return (
      <div className='ConferenceCalendar'>
        <h1>Conference Calendar</h1>
        <div className="verticalScroll">{this.showAllCards()}</div>{" "}
      </div>
    );
  }
}

export default CalendarV2;

/* 
use: npm 
react-horizontal-scrolling-menu
*/