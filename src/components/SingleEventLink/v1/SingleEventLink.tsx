import React from "react";
import {CalendarEvent} from "../../../models/CalendarEvent";
import "./SingleEventLink.scss";
import LinkStyle from "../../../models/LinkStyle";
import moment from 'moment'

interface ISingleEventProps {
  eventDetails: CalendarEvent;
  linkStyle: LinkStyle;
}

class SingleEventLink extends React.Component<ISingleEventProps, {}> {
  showEventTags = () => {
    const event = this.props.eventDetails;
    if (event.tags.length > 0) {
      return event.tags.map((tag: string, index: number) => {
        const info: string = event.tags[index];
        return (
          <span key={index} className="tag">
            <p className="blueText">{info}</p>
          </span>
        );
      });
    }
  };

  getDateIfExists = () => {
    const event = this.props.eventDetails;
    if (event.start_date) {
      var newMoment: any = moment.utc(event.start_date);
      return (
        <div className="blueText">
          <p>
          <span>{newMoment.format('MMMM (dddd) Do, YYYY')}</span>
          </p>
        </div>
      );
    } else {
      return <span />;
    }
  };

  render() {
    const event = this.props.eventDetails;
    var styling: string = "";
    if (this.props.linkStyle === LinkStyle.horizontal) styling = "col-lg-6";
    if (this.props.linkStyle === LinkStyle.vertical) styling = "more-margin";
    return (
      <div className={styling}>
        <a href={this.props.eventDetails.website} target="_blank">
          <div className="event-info">
            {this.getDateIfExists()}
            <h3>{event.short_name}</h3>
            <div>
              <p>
                {event.venue_name}, {event.venue_city}
              </p>
            </div>
            <div>{this.showEventTags()}</div>
          </div>
        </a>
      </div>
    );
  }
}

export default SingleEventLink;
