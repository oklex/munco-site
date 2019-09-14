import React from "react";
import MediaItem from "../../models/MediaItem";
import { BlogService } from "../../services/BlogService";
import "./SingleBlogLink.scss";
import { SingleBlogPost } from "../../models/BlogPost";
import BlogPostProcessor from "../../utils/BlogPostProcessor";
import MediaProcessor from "../../utils/MediaProcessor";
import Interweave from "interweave";
import { Link } from "react-router-dom";
import LinkStyle from '../../models/LinkStyle'

interface ISingleBlogLinkProps {
  post: SingleBlogPost;
  //   postId: number;
  //   featuredMediaId: number;
  //   postExcerpt: string;
  style: LinkStyle;
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
      //console.log(this.state);
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
    if (this.props.style === LinkStyle.horizontal) {
      positionStyle = "textbox-horizontal";
    } else if (this.props.style === LinkStyle.vertical) {
      positionStyle = "textbox-vertical";
    }
    return (
      <div className={positionStyle}>
        <h4>{BlogPostProcessor.getPostTitle(this.props.post)}</h4>
        <Interweave
          content={BlogPostProcessor.getPostExcerptByLength(
            this.props.post,
            150
          )}
        />
      </div>
    );
  };

  render() {
    //console.log(this.state)
    var flexIf: string = "";
    if (this.props.style === LinkStyle.horizontal) {
      flexIf = LinkStyle.horizontal;
    }
    return (
      <Link to={`/features/${this.props.post.id}`}>
        <div className={"singleBlogLink " + flexIf}>
          {this.getImageIfExists()} {this.getTextbox()}
        </div>
      </Link>
    );
  }
}

export default SingleBlogLink;
