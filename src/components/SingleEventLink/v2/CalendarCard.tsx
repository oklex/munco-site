import React from "react";
import {
  ICalendarResponse,
  IConferenceEvent,
  IApplicationEvent
} from "../../../models/CalendarEvent";
import AllApplications from "../../AllApplications/AllApplications";
import './CalendarCard.scss'
// import ICalendarResponse from '../../../models/CalendarEvent'

interface ICalendarCardProps {
  CardDetails: ICalendarResponse;
}

// this displays the calendar card depending on the input data: ICalendarResponse[]
// it is the responsibility of the API to return the correct data
export class CalendarCard extends React.Component<ICalendarCardProps, {}> {
  renderTitle = () => {
    return (
      <div className='title'>
        <h1>{this.props.CardDetails.organization.short_name}</h1>
        <h3>{this.props.CardDetails.organization.full_name}</h3>
      </div>
    );
  };

  renderEvent = () => {
    if (this.props.CardDetails.event) {
      const eventDetails: IConferenceEvent = this.props.CardDetails.event;
      return (
        <div className='eventDetails'>
          {/* <h3>
            {eventDetails.start_date} --
            {eventDetails.end_date ? eventDetails.end_date : ""}
          </h3> */}
          <p>
            {eventDetails.venue_name}, {eventDetails.venue_city}
          </p>
          <p className="blueText">{eventDetails.tags}</p>
        </div>
      );
    } else {
      return <div/>;
    }
  };

  renderApplication = () => {
    if (this.props.CardDetails.applications) {
      const allApps: IApplicationEvent[] = this.props.CardDetails.applications;
      return allApps.map(this.renderSingleApplication)
    }
  };

  renderSingleApplication = (app: IApplicationEvent) => {
    return (
      <div className='AppDetails'>
        <h2>{app.type}</h2>
        <p>{app.start_date}</p>
      </div>
    );
  }

  render() {
    return (
      <div className='CalendarCard'>
        {this.renderTitle()}
        {this.renderEvent()}
        {/* {this.renderApplication()} */}
      </div>
    );
  }
}

export default CalendarCard;
