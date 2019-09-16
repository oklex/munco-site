import MediaItem from "../models/MediaItem";
import { BlogService } from "../services/BlogService";
import MediaProcessor from "./MediaProcessor";
import FullScreen from "../components/SplitScreen/FullScreen";

/* 
- NOTE
- This function set has been replaced by component: ImgWrapper
- please avoid using these functions
*/

export interface IMediaData {
  url: string,
  alt: string
}

export const GetMedia = {
  async byHeight(mediaId: number, height: number) {
    try {
      //console.log('starting get media')
      const mediaItem: MediaItem = await BlogService.getMediaFromID(mediaId);
      const imgUrl: any = await MediaProcessor.getMediaForHeight(
        mediaItem,
        height
      );
      //console.log('img url returned: ', imgUrl)
      return imgUrl;
    } catch (err) {
      //console.log(err);
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
      //console.log(err);
      return;
    }
  },
  async byFull(mediaId: number) {
    try {
      const mediaItem: MediaItem = await BlogService.getMediaFromID(mediaId);
      const imgUrl: any = await MediaProcessor.getMediaFull(mediaItem)
      return imgUrl
    } catch (err) {
      return
    }
  }
};

export default GetMedia;
