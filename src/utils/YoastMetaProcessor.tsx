import { SingleBlogPost } from "../models/BlogPost";
import YoastMeta from "../models/YoastMeta";
import { ParseMetaTags } from "./ParseMetaTags";
import React from "react";

// take in a post item
// if item has a yoast meta
// go through it and parse into strings
// return a large JSX element

export const YoastMetaProcessor = {
  async fromPost(post: SingleBlogPost) {
    try {
      const yoast_meta = post.yoast_meta;
      if (yoast_meta) {
        var array: YoastMeta[] = await ParseMetaTags.asArray(yoast_meta);
        var tagArray: JSX.Element[] = []
        // process tags into an array of meta tags
        for (var i = 0; i < array.length; i++ ) {
          var tag:YoastMeta = array[i]
          if (tag.property && tag.property === 'og:title') {
            tagArray.push(<title key={i}>{tag.content}</title>)
          } else if (tag.property && tag.property === 'og:description') {
            tagArray.push(<meta key={i} name='description' content={tag.content}/>)
          } else if (tag.name){
            tagArray.push(<meta key={i} name={tag.name} content={tag.content}/>)
          } else if (tag.property) {
            tagArray.push(<meta key={i} property={tag.property} content={tag.content}/>)
          }
        }
        // console.log('tagArray:', tagArray)
        return tagArray
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
