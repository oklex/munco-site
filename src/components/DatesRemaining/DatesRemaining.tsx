import React from "react";
import "./DatesRemaining.scss";
import moment from "moment";
import { app } from "firebase";

interface IDatesRemainingProps {
  startDate: Date;
  endDate: Date;
  currentDate?: Date;
}

interface IDatesRemainingState {
  currentDate: Date;
}

class DatesRemaining extends React.Component<
  IDatesRemainingProps,
  IDatesRemainingState
> {
  state = {
    currentDate: this.props.currentDate ? this.props.currentDate : new Date()
  };

  // needs to be refactored
  getDateDescription = () => {
    var dateDescription: string = "";
    const now: Date = new Date();

    const startMoment: any = moment.utc(this.props.startDate);
    const endMoment: any = moment.utc(this.props.endDate);
    const startDate: string = startMoment.format("(dddd), MMM Do");
    const endDate: string = endMoment.format("(dddd), MMM Do");
    console.log("starting on: ", this.props.startDate, " - now is: ", now);
    if (this.props.startDate <= now && this.props.endDate >= now) {
      console.log("already started");
      return <p className="miniText">started; ending on {endDate}</p>;
    }
    if (this.props.startDate <= now && this.props.endDate < now) {
      console.log("already ended");
      return <p className="miniText">closed on {endDate}</p>;
    } else if (this.props.startDate > now) {
      console.log("not yet started");
      return <p className="miniText">starting on {startDate}</p>;
    } else {
      return <p className="miniText">closed on {endDate}</p>;
    }
  };

  render() {
    return <div className="date-indicator">{this.getDateDescription()}</div>;
  }
}

export default DatesRemaining;
