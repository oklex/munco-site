import React from "react";
import { string } from "prop-types";
import './SignupForm.scss'

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

  render() {
    return <div id='newsletter-SignupForm'>something</div>;
  }
}

export default SignupForm;