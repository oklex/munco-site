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
  oneWeekFromNow: Date;
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
    startMoment: moment(this.props.startDate),
    endMoment: moment(this.props.endDate),
    startDate: moment(this.props.startDate).format("(dddd), MMM Do"),
    endDate: moment(this.props.endDate).format("(dddd), MMM Do"),
    oneWeekFromNow: moment(new Date())
      .add(7, "days")
      .toDate(),
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
      - it's open
        - it's due today
        - it's due within the week
        - it's not due anytime soon
      - it's not yet open
    */
    if (this.props.endDate < this.state.currentDate) {
      console.log("ended on: ", this.state.currentDate, this.state.endDate);
      this.setState({
        timerBarClass: TimerBarClass.CLOSED,
        timerDisplayDate: this.props.endDate,
        timerDescription: "closed on " + this.state.endDate
      });
    } else if (this.props.startDate < this.state.currentDate) {
      // has started
      if (this.props.endDate.getDate() == this.state.currentDate.getDate() && this.props.endDate.getMonth() == this.state.currentDate.getMonth()){
        console.log('closing today', this.props.endDate, this.state.currentDate)
        this.setState({
          timerBarClass: TimerBarClass.OPEN,
          timerDisplayDate: this.props.endDate,
          timerDescription: "closing today! " + this.state.endDate
        });
      } else if (this.props.endDate < this.state.oneWeekFromNow) {
        console.log('closing soon', this.props.endDate, this.state.currentDate)
        this.setState({
          timerBarClass: TimerBarClass.OPEN,
          timerDisplayDate: this.props.endDate,
          timerDescription: "closing soon; on " + this.state.endDate
        });
      } else {
        console.log('closing later')
        this.setState({
          timerBarClass: TimerBarClass.OPEN,
          timerDisplayDate: this.props.endDate,
          timerDescription: "started; closing on " + this.state.endDate
        });
      }
    } else if (this.props.startDate > this.state.currentDate) {
      // has not yet started
      this.setState({
        timerBarClass: TimerBarClass.WAITING,
        timerDisplayDate: this.props.startDate,
        timerDescription: "opens on " + this.state.startDate
      });
    }

    // else if (this.props.startDate > this.state.currentDate) {
    //   console.log("start on: ", this.state.startDate);
    //   this.setState({
    //     timerBarClass: TimerBarClass.WAITING,
    //     timerDisplayDate: this.props.startDate,
    //     timerDescription: "opens on " + this.state.startDate
    //   });
    // } else if (this.props.startDate < this.state.currentDate && this.props.endDate < this.state.oneWeekFromNow) {
    //   console.log("start on: ", this.state.startDate);
    //   this.setState({
    //     timerBarClass: TimerBarClass.OPEN,
    //     timerDisplayDate: this.props.endDate,
    //     timerDescription: "closing soon; on " + this.state.endDate
    //   });
    // } else if (this.props.startDate <= this.state.currentDate) {
    //   console.log("closing on: ", this.state.endDate);
    //   this.setState({
    //     timerBarClass: TimerBarClass.OPEN,
    //     timerDisplayDate: this.props.endDate,
    //     timerDescription: "started; closing on " + this.state.endDate
    //   });
    else {
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
      if (segments > segmentLimit) {
        // return a solid bar
        return <div className={this.state.timerBarClass + "-full"}></div>;
      } else {
        console.log(segments);
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
    let returnJSX: JSX.Element[] = [];

    for (var i: number = 0; i < n; i++) {
      returnJSX.push(
        <div
          key={i}
          className={
            "s-" +
            i +
            " " +
            "segment" +
            " " +
            "segment-" +
            this.state.timerBarClass
          }
        ></div>
      );
    }
    return returnJSX;
  };

  getDaysUntil = (comingDate: Date) => {
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = comingDate.getTime() - this.state.currentDate.getTime();
    var days = millisBetween / millisecondsPerDay;
    console.log("days until: ", comingDate, Math.ceil(days));
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
