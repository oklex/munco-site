import React from "react";
import CalendarCard from "../../../components/SingleEventLink/v2/CalendarCard";
import { ICalendarResponse } from "../../../models/CalendarEvent";
import CalendarService, {
  sortBy,
} from "../../../services/CalendarService/v2/CalendarService";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Calendar.scss";
import FullScreen from "../../../components/SplitScreen/FullScreen";
import Helmet from "react-helmet";
import SplitScreen from "../../../components/SplitScreen/SplitScreen";

interface ICalendarState {
  allCalendarEvents: ICalendarResponse[];
}

enum CalendarFilterTypes {
  staffApps = "Staff Applications",
  secretariatApps = "Secretariat Applications",
  delegateRegistration = "Delegate Registration",
  volunteer = "Volunteer Opportunities"
}
// this contains the page
// which contains search selection & carousel that contains Calendar cards
export class CalendarV2 extends React.Component<{}, ICalendarState> {
  state = {
    allCalendarEvents: [],
  };

  componentDidMount = async () => {
    const allCalendarEvents: ICalendarResponse[] = await CalendarService.getAll();
    this.setState({
      allCalendarEvents: allCalendarEvents,
    });
  };

  renderArrow = (text: string, className: string) => {
    return <div className={className}>{text}</div>;
  };

  showAllCards = () => {
    if (this.state.allCalendarEvents.length === 0) {
      return (
        <div className='errorMessage'>
          <h1>oops &#128552;</h1>
          <p>looks like there's nothing here <br/>check back later!</p>
        </div>
      );
    } else {
      return this.state.allCalendarEvents.map(
        (event: ICalendarResponse, key: number) => {
          if (
            !event.applications ||
            (event.applications && event.applications.length == 0)
          ) {
            return <div key={key}></div>; // omit no applications
          } else {
            return <CalendarCard key={key} CardDetails={event} />;
          }
        }
      );
    }
  };

  selectFilter = () => {
    return (
      <div className="filterBar">
        <div className="d-flex">
          <div>
            <h2>Filter by: </h2>
          </div>
          <div className='flex-grow-1 selection'>
            <p className='selectionText'>Applications</p>
          </div>
        </div>
        <ul>
    {/* <li>{CalendarFilterTypes.secretariatApps}</li>
    <li>{CalendarFilterTypes.staffApps}</li>
    <li>{CalendarFilterTypes.delegateRegistration}</li>
    <li>{CalendarFilterTypes.volunteer}</li> */}
        </ul>
      </div>
    );
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
        {/* <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={true}> */}
        <div className="row">
          <div className="col-sm-6 colapseOnMobile">
            <div className="fixed-cover">
              <div className="title">
                <h1>Conference Calendar</h1>
                {this.selectFilter()}
                <div className="menu-tools">
                  <div className="menu-tag">
                    Do you manage a conference?
                    <p className="tooltiptext">
                      Tell us what dates you're planning!
                    </p>
                  </div>
                  <div className="menu-tag">
                    Report a problem
                    <p className="tooltiptext">
                      PM us on Facebook or Instagram!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* </SplitScreen> */}
          </div>
          <div className="col-md-6">
            {/* <SplitScreen hideOnWrap={false}> */}
            <div className="calendar-section">{this.showAllCards()}</div>
            {/* </SplitScreen> */}
            {/* </FullScreen> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarV2;

/* 
use: npm 
react-horizontal-scrolling-menu
*/
