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
    const allCalendarEvents: ICalendarResponse[] =  await CalendarService.getAll()
    this.setState({
      allCalendarEvents: allCalendarEvents
    });
  };

  renderAllCards = () => {
    return (<div>{this.state.allCalendarEvents.map(event => {
       console.log("rendering card for: ",event); return <p>Hello world</p>})}
    </div>)
  };
  render() {
    return <div>{this.renderAllCards()}</div>;
  }
}

export default CalendarV2;
