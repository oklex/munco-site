import MediaItem from "../models/MediaItem";
import { BlogService } from "../services/BlogService";
import MediaProcessor from "./MediaProcessor";

/* 
- Include ALT fetching
- update the other components accordingly
*/

export interface IMediaData {
  url: string,
  alt: string
}

export const GetMedia = {
  async byHeight(mediaId: number, height: number) {
    try {
      console.log('starting get media')
      const mediaItem: MediaItem = await BlogService.getMediaFromID(mediaId);
      const imgUrl: any = await MediaProcessor.getMediaForHeight(
        mediaItem,
        height
      );
      console.log('img url returned: ', imgUrl)
      return imgUrl;
    } catch (err) {
      console.log(err);
      return;
    }
  },
  async byWidth(mediaId: number, width: number) {
    try {
      const mediaItem: MediaItem = await BlogService.getMediaFromID(mediaId);
      const imgUrl: any = await MediaProcessor.getMediaForWidth(
        mediaItem,
        width
      );
      return imgUrl;
    } catch (err) {
      console.log(err);
      return;
    }
  },
};

export default GetMedia;
