import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom'
import "./BlogPost.scss";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";

interface IBlogPostProps extends RouteComponentProps {
}

class BlogPost extends React.Component<IBlogPostProps, {}> {

componentDidMount = async() => {
    let param = this.props.match.params
    console.log('param: ',param)
}

  render() {
    return (
      <div className="blogPost">
        <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={false}>
            <div>Left</div>
          </SplitScreen>
          <SplitScreen hideOnWrap={false}>
            <div>Right</div>
          </SplitScreen>
        </FullScreen>
      </div>
    );
  }
}
export default withRouter(BlogPost);

// to-do:
/* 
Basic display:
- determine the props: pass by id
- set-up the api interface
- save the details in state
- display cleanly
*/
