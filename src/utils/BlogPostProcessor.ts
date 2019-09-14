import { SingleBlogPost } from "../models/BlogPost";

export const BlogPostProcessor = {
  getPostTitle(post: SingleBlogPost) {
    try {
      return post.title.rendered;
    } catch (err) {
      //console.log(err);
      return;
    }
  },
  getPostId(post: SingleBlogPost) {
    try {
      return post.id;
    } catch (err) {
      //console.log(err);
      return;
    }
  },
  getFeaturedImageId(post: SingleBlogPost) {
    try {
      return post.featured_media;
    } catch (err) {
      //console.log(err);
      return;
    }
  },
  getPostExcerpt(post: SingleBlogPost) {
    try {
      return post.excerpt.rendered;
    } catch (err) {
      //console.log(err);
      return;
    }
  },
  getPostContent(post: SingleBlogPost) {
    try {
      return post.content.rendered
    } catch (err) {
      //console.log(err)
      return
    }
  },
  getPostExcerptByLength(post: SingleBlogPost, charLength: number) {
    try {
      // //console.log('excerpt length: ', charLength)
      var excerpt: string = post.excerpt.rendered;
      // at charLength, iterate until end OR a space, then add the [...] thing
      var i: number = charLength;
      if (i < excerpt.length) {
        for (i; i < excerpt.length; i++) {
          if (excerpt[i] === ' ' || excerpt[i] === '\t' || excerpt[i] === '\n' ) {
            // //console.log('excerpt slice at: ', i, 'out of: ', excerpt.length)
            return excerpt.slice(0, i) + ' [&#8230;]'
          }
        }
      }
      return excerpt;
    } catch (err) {
      //console.log(err);
      return;
    }
  }
};

export default BlogPostProcessor;
