import { SingleBlogPost } from "../models/BlogPost";
import YoastMeta from "../models/YoastMeta";

// take in a post item
// if item has a yoast meta
// go through it and parse into strings
// return a large JSX element

export const YoastMetaProcessor = {
  fromPost(post: SingleBlogPost) {
    try {
      console.log("starting yoast meta processor");
      const yoast_meta = post.yoast_meta;
      if (yoast_meta) {
        console.log("tags: ", yoast_meta);
        // const metaArray: YoastMeta[] = JSON.parse(`${yoast_meta}`);
        // for (var i = 0; i < )
        // console.log("array", yoast_meta[]);
        // see: https://stackoverflow.com/questions/9991805/javascript-how-to-parse-json-array

        // must stringify first, then parse
        return null;
      } else {
        console.log("no tags found");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};

export default YoastMetaProcessor;
