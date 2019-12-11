import React from "react";
import { SingleBlogPost } from "../../models/BlogPost";
import SingleBlogLink from "../SingleBlogLink/SingleBlogLink";
import LinkStyle from "../../models/LinkStyle";
import { BlogService } from "../../services/BlogService";
import "./BlogList.scss";

interface BlogListState {
  blogPosts: SingleBlogPost[];
}

class BlogList extends React.Component<{}, BlogListState> {
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
    if (this.state.blogPosts.length === 0) {
      return (
        <div className="d-flex flex-wrap justify-content-left">
          <p>Oops :(  there's a problem with our server. <br/>Try again later.</p>
        </div>
      )
    } else {
      return (
        <div className="d-flex flex-wrap justify-content-left">
          {this.state.blogPosts.map(this.showSinglePost)}
        </div>
      );
    }
  };

  showSinglePost = (post: SingleBlogPost) => {
    return (
      <div key={post.id}>
        <SingleBlogLink post={post} style={LinkStyle.horizontal} />
      </div>
    );
  };

  render() {
    return (
      <div className="blogList">
        <div className="container no-space-top">
          <div className="d-flex">{this.showAllPosts()}</div>
        </div>
      </div>
    );
  }
}

export default BlogList;
