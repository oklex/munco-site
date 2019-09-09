import React from "react";
import MediaItem from "../../models/MediaItem";
import { BlogService } from "../../services/BlogService";
import "./SingleBlogLink.scss";
import { SingleBlogPost } from "../../models/BlogPost";
import BlogPostProcessor from "../../utils/BlogPostProcessor";
import MediaProcessor from "../../utils/MediaProcessor";
import Interweave from "interweave";

interface ISingleBlogLinkProps {
  post: SingleBlogPost;
  //   postId: number;
  //   featuredMediaId: number;
  //   postExcerpt: string;
  style: linkStyle;
}

export enum linkStyle {
  vertical = "vertical",
  horizontal = "horizontal"
}

interface ISingleBlogLinkState {
  mediaData: MediaItem | null;
  thumbnailUrl: string | null;
}

class SingleBlogLink extends React.Component<
  ISingleBlogLinkProps,
  ISingleBlogLinkState
> {
  state = {
    mediaData: null,
    thumbnailUrl: null
  };

  componentDidMount = async () => {
    const featuredMediaId = BlogPostProcessor.getFeaturedImageId(
      this.props.post
    );
    if (featuredMediaId) {
      var mediaData: MediaItem = await BlogService.getMediaFromID(
        featuredMediaId
      );
      var thumbnailUrl: any = await MediaProcessor.getMediaForHeight(
        mediaData,
        400
      );
      this.setState({
        mediaData: mediaData,
        thumbnailUrl: thumbnailUrl
      });
      console.log(this.state);
    }
  };

  getImageIfExists = () => {
    const imgUrl = this.state.thumbnailUrl;
    if (imgUrl) {
      return (
        <div className="featured-image">
          <div className={this.props.style}>
            <img src={imgUrl} alt="thumbnail" />
          </div>
        </div>
      );
    } else return <div></div>;
  };

  getTextbox = () => {
    var positionStyle: string = "";
    if (this.props.style === linkStyle.horizontal) {
      positionStyle = "textbox-horizontal";
    } else if (this.props.style === linkStyle.vertical) {
      positionStyle = "textbox-vertical";
    }
    return (
      <div className={positionStyle}>
        <h5>{BlogPostProcessor.getPostTitle(this.props.post)}</h5>{" "}
        <Interweave content={BlogPostProcessor.getPostExcerptByLength(this.props.post, 150)}/>
      </div>
    );
  };

  render() {
    var flexIf: string = "";
    if (this.props.style === linkStyle.horizontal) {
      flexIf = linkStyle.horizontal;
    }
    return (
      <div className={"singleBlogLink " + flexIf}>
        {this.getImageIfExists()} {this.getTextbox()}
      </div>
    );
  }
}

export default SingleBlogLink;
