import React from "react";
import date from 'date-and-time';
import ApplicationDetails from "../../models/ApplicationDetails";

export interface IApplicationProps {
  app: ApplicationDetails
}

class Application extends React.Component<IApplicationProps, {}> {
  showLinkIfExists = () => {
    if (this.props.app.applicationLink) {
      return (
        <div>
          <a href={this.props.app.applicationLink}>Apply now></a>
        </div>
      );
    }
  };

  showDeadlineIfExists = () => {
      if (this.props.app.deadline) {
          return <p className='blueText'>{date.format(this.props.app.deadline, 'ddd, MMM. DD YYYY')}</p>
      }
  }

  render() {
    return (
      <div>
        <h5>{this.props.app.title}</h5>
        {this.showDeadlineIfExists()}
        <p>{this.props.app.description}</p>
      </div>
    );
  }
}

export default Application;

/* 
TODO:
1. click to open modal
2. modal form sends an email
3. formatting
*/
