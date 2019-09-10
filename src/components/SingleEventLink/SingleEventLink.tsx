import React from "react";
import CalendarEvent from "../../models/CalendarEvent";
import './SingleEventLink.scss'

interface ISingleEventProps {
  eventDetails: CalendarEvent;
}

class SingleEventLink extends React.Component<ISingleEventProps, {}> {

    showEventTags = () => {
        const event = this.props.eventDetails;
        if (event.tags.length > 0) {
            return event.tags.map((tag: string, index: number) => {
                const info:string = event.tags[index]
                return <p className='tags blueText'>{info}, </p>
            })
        }
    }
  render() {
    const event = this.props.eventDetails;
    return (
      <div className='col-lg-6'>
        <div className="event-info">
          <h5>{event.short_name}</h5>
          <div><p>
            {event.venue_name}, {event.venue_city}
          </p>
              </div>
          <div>
            {this.showEventTags()}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEventLink;
