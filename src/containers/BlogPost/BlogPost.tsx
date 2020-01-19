import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./BlogPost.scss";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import BlogPostProcessor from "../../utils/BlogPostProcessor";
import Interweave from "interweave";
import YoastMetaProcessor from "../../utils/YoastMetaProcessor";
import Helmet from "react-helmet";
// import YoastMeta from "../../models/YoastMeta";
import WpMediaWrapper from "../../components/ImgWrapper";
import SignupForm from "../../components/NewsletterPoll/SignupForm";
import Error404 from "../Error404/Error404";

interface IBlogPostProps extends RouteComponentProps {}

interface IBlogPostState {
  postId: number | null;
  post: SingleBlogPost | null;
  mediaId: number | null;
  metaTags: JSX.Element[];
  error: boolean | null
}

/*
 TODO:
 - install npm window size
 - use it to get the appropriate size cover photo
*/

class BlogPost extends React.Component<IBlogPostProps, IBlogPostState> {
  state = {
    postId: null,
    post: null,
    mediaId: null,
    metaTags: [],
    error: null
  };

  componentDidMount = async () => {
    document.body.scrollTop = 0;
    let param: any = this.props.match.params;
    // console.log("param", param.id);
    try {
      const postData: any = await BlogService.getPostFromID(param.id);
      const featuredMedia: any = await BlogPostProcessor.getFeaturedImageId(
        postData
      );
      console.log("post data on api request: ", postData);
      this.setState({
        postId: param.id,
        post: postData,
        mediaId: featuredMedia,
        error: false
      });
      // console.log("State is now: ", this.state);
      var tags = await YoastMetaProcessor.fromPost(postData);
      if (tags) {
        this.setState({
          metaTags: tags
        });
      }
    } catch (err) {
      console.log("error with api call: ", err);
      this.setState({
        error: true
      })
    }
    // console.log('SEO tags: ', tags)
  };

  getPostMeta = () => {
    // also need to create a custom 'title' and 'description' section
    // if they don't exist, derive from 'og:<name>'?
    var tags: JSX.Element[] = this.state.metaTags;
    if (tags && this.state.postId) {
      tags.push(
        <meta
          property="og:url"
          content={`https://munco.ca/features/${this.state.postId}`}
        />
      );
    }
    return tags;
  };

  getFeaturedImg = () => {
    const mediaId = this.state.mediaId;
    if (mediaId) {
      return (
        <div className="featured-img">
          <WpMediaWrapper mediaId={mediaId} height={1000} />
        </div>
      );
    }
  };

  getBlogTitle = () => {
    const postData: any = this.state.post;
    var title: any;
    if (postData) {
      title = BlogPostProcessor.getPostTitle(postData);
    }
    if (title) {
      return (
        <div className="row">
          <div className="col-md-6">{this.getFeaturedImg()}</div>

          <div className="col-md-6">
            <div className="post-title">
              {/* {this.getFeaturedImg()} */}
              <h5 className="blueText">Presented by MUNCO</h5>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading . . . </p>
        </div>
      );
    }
  };

  getBlogContent = () => {
    const postData: any = this.state.post;
    var content: any;
    if (postData) {
      content = BlogPostProcessor.getPostContent(postData);
    }
    if (content) {
      return (
        <div className="read-content">
          <div className="post-content">
            <Interweave content={content} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading . . . </p>
        </div>
      );
    }
  };

  displayQuickButton = () => {
    return (
      <div className="other-buttons d-flex justify-content-center">
        <button type="button" className="btn btn-outline-secondary">
          <a href="https://forms.gle/rzHMmwdG7ay9LrCc6" target="_blank">
            <h4>refer someone</h4>
          </a>
        </button>
      </div>
    );
  };

  renderPostIfExists = () => {
    if (this.state.error) {
      console.log('show 404...')
      return <Error404/>
    } else {
      return (
        <div className="blogPost">
          <Helmet>{this.getPostMeta()}</Helmet>
          {this.getBlogTitle()}
          {this.getBlogContent()}
          {this.displayQuickButton()}
          <SignupForm
            question="Do you think that staff hiring is bias?"
            questionKey="is_staff_hiring_bias"
            endDate={new Date("January 17, 2020")}
          />
        </div>
      );
    }
  }

  render() {
    return (this.renderPostIfExists())
  }
}
export default withRouter(BlogPost);
