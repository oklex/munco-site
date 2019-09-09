import { SingleBlogPost } from "../models/BlogPost";

export const BlogPostProcessor = {
  getPostTitle(post: SingleBlogPost) {
    try {
      return post.title.rendered;
    } catch (err) {
      console.log(err);
      return;
    }
  },
  getPostId(post: SingleBlogPost) {
    try {
      return post.id;
    } catch (err) {
      console.log(err);
      return;
    }
  },
  getFeaturedImageId(post: SingleBlogPost) {
    try {
      return post.featured_media;
    } catch (err) {
      console.log(err);
      return;
    }
  },
  getPostExcerpt(post: SingleBlogPost) {
    try {
      return post.excerpt.rendered;
    } catch (err) {
      console.log(err);
      return;
    }
  }
};

export default BlogPostProcessor;
