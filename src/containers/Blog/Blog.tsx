import React from "react";
import { SingleBlogPost } from "../../models/BlogPost";
import { BlogService } from "../../services/BlogService";
import SinglePostWrapper from "../../components/SinglePostWrapper/SinglePostWrapper";

interface BlogState {
  blogPosts: SingleBlogPost[];
  currentPostId: number;
}

class Blog extends React.Component<{}, BlogState> {
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
      <div key={post.id}>
        <h1>{post.slug}</h1>
        <p>Date: {post.date}</p>
        <p>id: {post.id}</p>
        <button onClick={() => this.updateCurrentPost(post.id)} >see this </button>
      </div>
    );
  };

  updateCurrentPost = (postId: number) => {
    console.log('updating to: ', postId)
    this.setState({
      currentPostId: postId
    });
  };

  renderPostIfSelected = () => {
    console.log('state id: ', this.state.currentPostId)
    if (this.state.currentPostId) {
      return <SinglePostWrapper postId={this.state.currentPostId} />
    } else return <SinglePostWrapper postId={ null } />
  };

  render() {
    return <div>{this.showAllPosts()}
    {this.renderPostIfSelected()}</div>;
  }
}

export default Blog;
