import React from "react";
import "./DatesRemaining.scss";

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

  render() {
    console.log("testing current Date: ", this.state.currentDate);
    return <div className='date-indicator'></div>;
  }
}

export default DatesRemaining;
