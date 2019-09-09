import { SingleBlogPost } from "../models/BlogPost";

export const BlogPostProcessor = {
  getPostId(post: SingleBlogPost) {
    return post.id;
  },
  getFeaturedImageId(post: SingleBlogPost) {
    return post.featured_media;
  },
  getPostExcerpt(post: SingleBlogPost) {
    return post.excerpt.rendered;
  }
};

export default BlogPostProcessor