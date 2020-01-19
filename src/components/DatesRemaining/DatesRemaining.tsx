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
  startMoment: any;
  endMoment: any;
  startDate: string;
  endDate: string;
  timerBarClass: TimerBarClass | null;
  timerDisplayDate: Date | null;
  timerDescription: string | null;
}

enum TimerBarClass {
  WAITING = "waiting",
  OPEN = "open",
  CLOSED = "closed"
}

class DatesRemaining extends React.Component<
  IDatesRemainingProps,
  IDatesRemainingState
> {
  state: IDatesRemainingState = {
    currentDate: this.props.currentDate ? this.props.currentDate : new Date(),
    startMoment: moment.utc(this.props.startDate),
    endMoment: moment.utc(this.props.endDate),
    startDate: moment.utc(this.props.startDate).format("(dddd), MMM Do"),
    endDate: moment.utc(this.props.endDate).format("(dddd), MMM Do"),
    timerBarClass: null,
    timerDisplayDate: null,
    timerDescription: null
  };

  componentDidMount = () => {
    console.log(
      "from: ",
      this.state.startDate,
      " - to - ",
      this.state.endDate,
      "// current date: ",
      this.state.currentDate
    );
    /* 
    cases:
    - it's already ended -> closed. (endDate < currentDate)
    - it's not yet started -> starting on (startDate > currentDate)
    - it's already stated but not over yet -> closing on (start <= currentDate)
    */
    if (this.props.endDate < this.state.currentDate) {
      console.log("ended on: ", this.state.endDate);
      this.setState({
        timerBarClass: TimerBarClass.CLOSED,
        timerDisplayDate: this.props.endDate,
        timerDescription: "closed on " + this.state.endDate
      });
    } else if (this.props.startDate > this.state.currentDate) {
      console.log("start on: ", this.state.startDate);
      this.setState({
        timerBarClass: TimerBarClass.WAITING,
        timerDisplayDate: this.props.startDate,
        timerDescription: "starting on " + this.state.startDate
      });
    } else if (this.props.startDate <= this.state.currentDate) {
      console.log("closing on: ", this.state.endDate);
      this.setState({
        timerBarClass: TimerBarClass.OPEN,
        timerDisplayDate: this.props.endDate,
        timerDescription: "started; closing on " + this.state.endDate
      });
    } else {
      throw Error;
    }
  };

  renderDateDescription = () => {
    return <p className="miniText">{this.state.timerDescription}</p>;
  };

  renderTimerBar = () => {
    if (this.state.timerBarClass && this.state.timerDisplayDate) {
      const comingDate: Date = this.state.timerDisplayDate;
      const segmentLimit: number = 22;
      const segments: number = this.getDaysUntil(comingDate);
      if (segments > segmentLimit || segments <= 0) {
        // return a solid bar
        return (
          <div className={this.state.timerBarClass + '-full'}>
          </div>
        );
      } else {
        console.log(segments)
        return (
          <div className={this.state.timerBarClass}>
            {/* <p className="miniText">segmented bar for {segments} days</p> */}
            {this.renderSegments(segments)}
          </div>
        );
      }
    } else {
      return <div>no data</div>;
    }
  };

  renderSegments = (n: number) => {
    let returnJSX: JSX.Element[] = []

    for (var i: number = 0; i < n; i++) {
      returnJSX.push(<div key={i} className={'s-' + i + ' ' + 'segment' + ' ' + 'segment-' + this.state.timerBarClass}></div>)
    }
    return returnJSX
  }

  getDaysUntil = (comingDate: Date) => {
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = comingDate.getTime() - this.state.currentDate.getTime();
    var days = millisBetween / millisecondsPerDay;
    return Math.ceil(days);
  };

  render() {
    return (
      <div>
        <div className="date-indicator">{this.renderTimerBar()}</div>
        {this.renderDateDescription()}
      </div>
    );
  }
}

export default DatesRemaining;
