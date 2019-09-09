import React from "react";
import MediaItem from "../../models/MediaItem";
import { BlogService } from "../../services/BlogService";
import "./SingleBlogLink.scss";
import { SingleBlogPost } from "../../models/BlogPost";
import BlogPostProcessor from "../../utils/BlogPostProcessor";

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
  mediumThumbnailUrl: string | null;
  fullUrl: string | null;
}

class SingleBlogLink extends React.Component<
  ISingleBlogLinkProps,
  ISingleBlogLinkState
> {
  state = {
    mediaData: null,
    mediumThumbnailUrl: null,
    fullUrl: null
  };

  componentDidMount = async () => {
    const featuredMediaId = BlogPostProcessor.getFeaturedImageId(
      this.props.post
    );
    if (featuredMediaId) {
      var mediaData = await BlogService.getMediaFromID(featuredMediaId);
      this.setState({
        mediaData: mediaData,
        mediumThumbnailUrl:
          mediaData.media_details.sizes.medium_large.source_url,
        fullUrl: mediaData.media_details.sizes.full
      });
      console.log(this.state);
    }
  };

  getImageIfExists = () => {
    const imgUrl = this.state.mediumThumbnailUrl;
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
        <h5>title</h5> <p>excerpt</p>
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
