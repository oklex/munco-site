import React from "react";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import SinglePostWrapper from "../../components/SinglePostWrapper/SinglePostWrapper";

interface BlogHomeState {
  blogPosts: SingleBlogPost[];
  currentPostId: number;
}

class BlogHome extends React.Component<{}, BlogHomeState> {
  state = {
    blogPosts: [],
    currentPostId: 0
  };

  componentDidMount = async () => {
    const newPosts: SingleBlogPost[] = await BlogService.getMostRecent();
    this.setState({
      blogPosts: newPosts
    });
  };

  showAllPosts = () => {
    return this.state.blogPosts.map(this.showSinglePost);
  };

  showSinglePost = (post: SingleBlogPost, index: number) => {
    return (
      <div>
        <div onClick={() => this.updateCurrentPost(post.id)}><h1>{post.slug}</h1></div>
        <p>Date: {post.date}</p>
        <p>id: {post.id}</p>
      </div>
    );
  };

  updateCurrentPost = (postId: number) => {
    this.setState({
      currentPostId: postId
    });
  };

  renderPostIfSelected = () => {
    if (this.state.currentPostId) {
      return <SinglePostWrapper postId={this.state.currentPostId} />;
    } else return <div></div>;
  };

  render() {
    return <div>{this.showAllPosts()}
    {this.renderPostIfSelected()}</div>;
  }
}

export default BlogHome;
