import { SingleBlogPost } from "../models/BlogPost";
import YoastMeta from "../models/YoastMeta";
import { ParseMetaTags } from "./ParseMetaTags";

// take in a post item
// if item has a yoast meta
// go through it and parse into strings
// return a large JSX element

export const YoastMetaProcessor = {
  async fromPost(post: SingleBlogPost) {
    try {
      // console.log("starting yoast meta processor");
      const yoast_meta = post.yoast_meta;
      if (yoast_meta) {
        var array: YoastMeta[] = await ParseMetaTags.asArray(yoast_meta);
        // console.log(array)
        return array
      } else {
        console.log("no tags found");
        return [];
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};

export default YoastMetaProcessor;
