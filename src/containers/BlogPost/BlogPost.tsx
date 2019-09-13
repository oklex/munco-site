import React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import "./BlogPost.scss";
import FullScreen from "../../components/SplitScreen/FullScreen";
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import BlogPostProcessor from "../../utils/BlogPostProcessor";
import { GetMedia } from "../../utils/GetMediaUrlById";
import Interweave from "interweave";

interface IBlogPostProps extends RouteComponentProps {}

interface IBlogPostState {
  post: SingleBlogPost | null;
  mediaUrl: string | null;
  mediaAlt: string | null;
}

/*
 TODO:
 - install npm window size
 - use it to get the appropriate size cover photo
*/

class BlogPost extends React.Component<IBlogPostProps, IBlogPostState> {
  state = {
    post: null,
    mediaUrl: null,
    mediaAlt: null
  };

  componentDidMount = async () => {
    let param: any = this.props.match.params;
    console.log("param", param.id);
    const postData: any = await BlogService.getPostFromID(param.id);
    const featuredMedia: any = await BlogPostProcessor.getFeaturedImageId(
      postData
    );
    const mediaUrl: any = await GetMedia.byHeight(featuredMedia, 1000);
    this.setState({
      post: postData,
      mediaUrl: mediaUrl
    });
    console.log("State is now: ", this.state);
  };

  getFeaturedImg = () => {
    const src = this.state.mediaUrl;
    var  alt:string = 'featured-student-portrait'
    //alt = this.state.mediaAlt;
    if (src) {
      return (
        <div className="featured-img">
          <img src={src} alt={alt} />
          {/* <div className="more-posts d-flex flex-wrap">
            <div className="post-btn">left</div> <div className='post-btn'>right</div>
          </div> */}
        </div>
      );
    }
  };

  getBlogContent = () => {
    const postData: any = this.state.post;
    var content: any;
    var title: any;
    if (postData) {
      content = BlogPostProcessor.getPostContent(postData);
      title = BlogPostProcessor.getPostTitle(postData);
    }
    if (content && title) {
      return (
        <div className="read-content">
          <div className="post-title">
            <h5 className="blueText">Presented by MUNCO</h5>
            <h1>{title}</h1>
          </div>
          <div className="post-content">
            <Interweave content={content} />
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="blogPost">
        <FullScreen hideOnMobile={false}>
          <SplitScreen hideOnWrap={false}>
            <div className="fixed-cover">{this.getFeaturedImg()}</div>
          </SplitScreen>
          <SplitScreen hideOnWrap={false}>
            <div>
              {this.getBlogContent()}
              <div className="other-buttons d-flex justify-content-around">
                <div className="div-btn left-btn">
                  <Link to="/features">
                    <h3> &lt; Back to all posts</h3>
                  </Link>
                </div>
                <div className="div-btn right-btn">
                  <a href="https://forms.gle/rzHMmwdG7ay9LrCc6" target="_blank">
                    <h3>refer someone &gt;</h3>
                  </a>
                </div>
              </div>
            </div>
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
