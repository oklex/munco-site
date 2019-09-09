import MediaItem from "../models/MediaItem";
import { BlogService } from "../services/BlogService";
import MediaProcessor from "./MediaProcessor";

// input media id, screen length
// get media item
// convert media item

export const GetMediaUrl = {
  async byHeight(mediaId: number, height: number) {
    try {
      const mediaItem: MediaItem = await BlogService.getMediaFromID(mediaId);
      const imgUrl: any = await MediaProcessor.getMediaForHeight(
        mediaItem,
        height
      );
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
  }
};

export default GetMediaUrl;
