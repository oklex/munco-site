import React from "react";
import { SingleBlogPost } from "../../models/BlogPost";
import SingleBlogLink, { linkStyle } from "../SingleBlogLink/SingleBlogLink";
import { BlogService } from "../../services/BlogService";
import './BlogList.scss'

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
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.blogPosts.map(this.showSinglePost)}
      </div>
    );
  };

  showSinglePost = (post: SingleBlogPost) => {
    return (
      <div key={post.id}>
        <SingleBlogLink post={post} style={linkStyle.horizontal} />
      </div>
    );
  };

  render() {
    return (
      <div className='blogList'>
        <div className="container no-space-top">
          <div className="d-flex">{this.showAllPosts()}</div>
        </div>
      </div>
    );
  }
}

export default BlogList;
