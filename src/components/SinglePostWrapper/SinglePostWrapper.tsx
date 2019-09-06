import React from "react";
import Interweave from "interweave";
import { BlogService } from "../../services/BlogService";

interface ISinglePostWrapperProps {
  postId: number | null;
}

interface ISinglePostWrapperState {
  content: string;
}

class SinglePostWrapper extends React.Component<
  ISinglePostWrapperProps,
  ISinglePostWrapperState
> {
  state = {
    content: ""
  };

  componentDidUpdate = async (prevProps: ISinglePostWrapperProps) => {
    if (this.props.postId !== prevProps.postId && this.props.postId !== null) {
      const post = await BlogService.getPostFromID(this.props.postId);
      const postContent = post.content.rendered;
      this.setState({
        content: postContent
      });
    }
  };

  render() {
    return (
      <div>
        <Interweave content={this.state.content} />
      </div>
    );
  }
}

export default SinglePostWrapper;
