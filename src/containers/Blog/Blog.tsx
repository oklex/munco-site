import React from "react";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import SingleBlogLink, {
  linkStyle
} from "../../components/SingleBlogLink/SingleBlogLink";
import "./Blog.scss";
const chilling: string = "/img/chilling.jpg";

interface BlogState {
  blogPosts: SingleBlogPost[];
}

class Blog extends React.Component<{}, BlogState> {
  state = {
    blogPosts: []
  };

  componentDidMount = async () => {
    const newPosts: SingleBlogPost[] = await BlogService.getMostRecent();
    this.setState({
      blogPosts: newPosts
    });
  };

  showAllPosts = () => {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.blogPosts.map(this.showSinglePost)}
      </div>
    );
  };

  showSinglePost = (post: SingleBlogPost, index: number) => {
    return (
      <div key={post.id}>
        <SingleBlogLink post={post} style={linkStyle.horizontal} />
      </div>
    );
  };

  render() {
    return (
      <div id="blog-home">
        <div className="blog-header">
          <img
            className="banner-img"
            src={chilling}
            alt="student in suit playing accordion"
          ></img>
          <div className='banner-overlay'>
            <div className='banner-title'>
            <h3>Features</h3>
            </div>
          </div>
        </div>
        <div className='container'>
        <div className='section-title'><h5>This is our community</h5></div>
        <div className="d-flex">{this.showAllPosts()}</div>
        </div>
      </div>
    );
  }
}

export default Blog;
