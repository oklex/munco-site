import React from "react";
import CalendarCard from "../../../components/SingleEventLink/v2/CalendarCard";
import { ICalendarResponse } from "../../../models/CalendarEvent";
import CalendarService from "../../../services/CalendarService/v2/CalendarService";

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
    return <div>{this.state.allCalendarEvents.map(event => {return <CalendarCard CardDetails={event} />})}</div>;
    }
  };

  render() {
    return <div>{this.showAllCards()}</div>;
  }
}

export default CalendarV2;
