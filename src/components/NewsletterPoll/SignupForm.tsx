import React from "react";
import { string } from "prop-types";
import "./SignupForm.scss";
import * as firebase from "firebase";
import moment from "moment";
import { hashEmail } from "../../utils/hashEmail";
import { withRouter, RouteComponentProps } from "react-router-dom";
import CopyUrl from "../CopyUrl/CopyUrl";

// @ts-ignore
import { SocialIcon } from "react-social-icons";

interface ISignupFormPrompt {
  question: string;
  questionKey: string;
  endDate: Date;
}

interface ISignupFormState {
  email: string;
  acceptNewsletters: boolean;
  rating: number | null;
  page: number;
}

class SignupForm extends React.Component<ISignupFormPrompt, ISignupFormState> {
  state = {
    email: "",
    acceptNewsletters: false,
    rating: null,
    page: 0
  };

  onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value
    });
  };

  onNewsLettersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState: ISignupFormState) => {
      return { acceptNewsletters: !prevState.acceptNewsletters };
    });
  };

  onResponseChange = (rating: number) => {
    this.setState({
      rating
    });
  };

  moveToNextPage = () => {
    const maxPageIndex = 2;
    if (this.state.page < maxPageIndex) {
      this.setState((prevState: ISignupFormState) => {
        return { page: prevState.page + 1 };
      });
    }
  };

  backToFirstPage = () => {
    this.setState({
      page: 0
    });
  };

  showNewsletterForm = () => {
    return (
      <div className="container fadeIn">
        <div className="row justify-content-center">
          <div className="col-lg-6">
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
                  onChange={this.onEmailChange}
                  onKeyPress={e => {
                    if (e.key === "Enter") this.onSubmit();
                  }}
                  aria-label="email"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => this.onSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    className="largerCheckbox"
                    type="checkbox"
                    value="newsletter"
                    onChange={this.onNewsLettersChange}
                  />
                  signup for our newsletter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  onSubmit = async () => {
    console.log("submitting form", this.state);
    if (
      this.state.email.length >= 5 &&
      this.checkIfValidEmail(this.state.email)
    ) {
      const timeNow: moment.Moment = moment();
      const emailId = hashEmail.getHash(this.state.email);
      this.moveToNextPage();
      await firebase
        .database()
        .ref("/polls/" + emailId + "/newsletters")
        .set(this.state.acceptNewsletters);
      await firebase
        .database()
        .ref("/polls/" + emailId + "/emailRaw")
        .set(this.state.email);
      await firebase
        .database()
        .ref("/polls/" + emailId + "/" + this.props.questionKey)
        .set({
          rating: this.state.rating,
          dateTime: timeNow.format("hh:mm a, MMMM (dddd) Do, YYYY")
        });
    }
  };

  checkIfValidEmail = (email: string) => {
    return email.includes("@");
  };

  showButtom = (desc: string, value: number, styleName: string) => {
    return (
      <span className="btn-container">
        <button
          className={"ratingButton" + " " + styleName}
          onClick={() => this.onRatingButtonClick(value)}
        >
          {value}
        </button>
        <p>{desc}</p>
      </span>
    );
  };

  onRatingButtonClick = (n: number) => {
    this.moveToNextPage();
    this.onResponseChange(n);
  };

  showPollingQuestion = () => {
    return (
      <div className="container fadeIn">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3>{this.props.question}</h3>
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
    );
  };

  showCompleted = () => {
    return (
      <div className="container fadeIn">
        {/* <div className="d-flex justify-content-start">
          <button className='darkText' onClick={() => this.backToFirstPage()}> &#60; go back to poll</button>
        </div> */}
        <h4>Thank you for submitting</h4>
        <p>could you also help us share this survey?</p>
        <CopyUrl />
        <SocialIcon url="https://www.messenger.com/" />
        <SocialIcon url="https://www.instagram.com/bc.munco/" />
      </div>
    );
  };

  showNextPage = () => {
    if (this.state.page === 0) {
      return this.showPollingQuestion();
    } else if (this.state.page === 1) {
      return this.showNewsletterForm();
    } else if (this.state.page === 2) {
      return this.showCompleted();
    } else {
      return <div></div>;
    }
  };

  render() {
    return <div className="newsletter-SignupForm">{this.showNextPage()}</div>;
  }
}

export default SignupForm;
