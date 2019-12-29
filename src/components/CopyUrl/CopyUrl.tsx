import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface CopyUrlProps extends RouteComponentProps {}
interface CopyUrlState {
    copied: boolean
}

class CopyUrl extends React.Component<CopyUrlProps, CopyUrlState> {
    state = {
        copied: false
    }

  getUrl = () => {
    console.log("this URL: ", this.props.location.pathname);
    const url: string = "munco.ca" + this.props.location.pathname;
    return url;
  };

  showText = () => {
      if (this.state.copied) {
          return 'copied'
      } else {
          return 'copy URL'
      }
  }

  render() {
    return (
      <button className="copy-btn" data-clipboard-text={this.getUrl()} onClick={() => {
          this.setState({ copied: true })
      }}>
        <img src="https://img.icons8.com/android/24/000000/link.png" alt="clipboard"/> {this.showText()}
      </button>
    );
  }
}

export default withRouter(CopyUrl)