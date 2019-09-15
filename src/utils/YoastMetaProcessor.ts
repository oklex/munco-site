import { SingleBlogPost } from "../models/BlogPost";
import YoastMeta from "../models/YoastMeta";

// take in a post item
// if item has a yoast meta
// go through it and parse into strings
// return a large JSX element

export const YoastMetaProcessor = {
    fromPost(post: SingleBlogPost) {
        console.log('starting yoast meta processor')
        const yoast_meta = post.yoast_meta
        if (yoast_meta) {
            console.log('tags: ',yoast_meta)
            // const metaArray: YoastMeta[] = yoast_meta
            // for (var i = 0; i < )
            return null
        } else {
            console.log('no tags found')
            return null
        }
    }
}

export default YoastMetaProcessor