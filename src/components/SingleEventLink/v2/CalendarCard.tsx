import React from "react";
import {
  ICalendarResponse,
  IConferenceEvent,
  IApplicationEvent
} from "../../../models/CalendarEvent";
import AllApplications from "../../AllApplications/AllApplications";
import "./CalendarCard.scss";
import moment from "moment";
// import ICalendarResponse from '../../../models/CalendarEvent'

interface ICalendarCardProps {
  CardDetails: ICalendarResponse;
}

// this displays the calendar card depending on the input data: ICalendarResponse[]
// it is the responsibility of the API to return the correct data
export class CalendarCard extends React.Component<ICalendarCardProps, {}> {
  renderTitle = () => {
    return (
      <div className="title">
        <h1>{this.props.CardDetails.organization.short_name}</h1>
        {/* <h3>{this.props.CardDetails.organization.full_name}</h3> */}
      </div>
    );
  };

  renderEvent = () => {
    if (this.props.CardDetails.event) {
      const eventDetails: IConferenceEvent = this.props.CardDetails.event;
      const dateMoment: any = moment.utc(eventDetails.start_date)
      var startDay: string = dateMoment.format('(dddd), MMM Do');
      var dateYear: string = dateMoment.format(', YYYY');
      var date: string = startDay + dateYear
      if (eventDetails.end_date) {
        const endDateMoment: any = moment.utc(eventDetails.end_date)
        var endDay: string = endDateMoment.format(' - (dddd), MMM Do');
        date = startDay + endDay + dateYear
      }
      return (
        <div className="eventDetails">
          <p className="blueText">{date}</p>
          <p className='miniText'>
            {eventDetails.venue_name}, {eventDetails.venue_city}
          </p>
          {this.showEventTags()}
        </div>
      );
    } else {
      return <div />;
    }
  };

  showEventTags = () => {
    if (this.props.CardDetails.event) {
      
    const eventDetails: IConferenceEvent = this.props.CardDetails.event;
    if (eventDetails.tags.length > 0) {
      return eventDetails.tags.map((tag: string, index: number) => {
        const info: string = eventDetails.tags[index];
        return (
          <span key={index} className="tag">
            <p>{info}</p>
          </span>
        );
      });
    }
    }
  };

  renderApplication = () => {
    if (this.props.CardDetails.applications) {
      const allApps: IApplicationEvent[] = this.props.CardDetails.applications;
      return allApps.map(this.renderSingleApplication);
    }
  };

  renderSingleApplication = (app: IApplicationEvent) => {
    return (
      <div className="AppDetails">
        <h2>{app.type}</h2>
        <p>{app.start_date}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="CalendarCard">
        {this.renderTitle()}
        {this.renderEvent()}
        {/* {this.renderApplication()} */}
      </div>
    );
  }
}

export default CalendarCard;
