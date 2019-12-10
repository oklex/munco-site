import React from "react";
import { string } from "prop-types";
import "./SignupForm.scss";

interface ISignupFormPrompt {
  title: string;
  question: string;
  options: string[];
}

interface ISignupFormState {
  email: string;
  acceptnewsLetters: boolean;
  response: string;
}

class SignupForm extends React.Component<{}, ISignupFormState> {
  state = {
    email: "",
    acceptnewsLetters: false,
    response: ""
  };

  onEmailChange = (text: string) => {
    this.setState({
      email: text
    });
  };

  onNewsLettersChange = () => {
    this.setState((prevState: ISignupFormState) => {
      return { acceptnewsLetters: !prevState.acceptnewsLetters };
    });
  };

  onResponseChange = (response: string) => {
    this.setState({
      response
    });
  };

  showNewsletterForm = () => {
    return (
      <div id="newsletter-SignupForm">
        <div className="container">
          <h3>Submit your email to cast your vote</h3>
          <div className="input-area">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  email
                </span>
              </div>
              <input
                className="form-control"
                type="emali"
                name="email"
                aria-label="email"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="checkbox">
              <label>
                <input
                  className="largerCheckbox"
                  type="checkbox"
                  value="newsletter"
                />
                signup for our newsletter
              </label>
            </div>
          </div>
        <button type="button" className="btn btn-secondary">submit response</button>
        </div>
      </div>
    );
  };

  showButtom = (desc: string, value: number, styleName: string) => {
    return (
      <span className="btn-container">
        <button className={"ratingButton" + " " + styleName}>{value}</button>
        <p>{desc}</p>
      </span>
    );
  };

  showPollingQuestion = () => {
    return (
      <div id="newsletter-SignupForm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3>Do you agree that staff hiring is bias?</h3>
              <div className="d-flex justify-content-center rating-container">
                {this.showButtom("disagree", 1, "red-background")}
                {this.showButtom("", 2, "orange-background")}
                {this.showButtom("neutral", 3, "yellow-background")}
                {this.showButtom("", 4, "lightgreen-background")}
                {this.showButtom("agree", 5, "green-background")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.showPollingQuestion()}{this.showNewsletterForm()}</div>;
  }
}

export default SignupForm;

// https://www.npmjs.com/package/react-responsive-carousel

/*
database:
- email
- - - question_id:
- - - - - - question: 
- - - - - - response: 
- - - - - - dateTime:
*/
