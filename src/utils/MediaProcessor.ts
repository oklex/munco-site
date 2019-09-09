import { MediaItem } from "../models/MediaItem";

export const MediaProcessor = {
  // get thumbnail url
  getMediaThumbnail(mediaData: MediaItem) {
    var data: any = mediaData.media_details.sizes;
    return data.thumbnail.source_url;
  },
  getMediaMedium(mediaData: MediaItem) {
    var data: any = mediaData.media_details.sizes;
    return data.medium.source_url;
  },
  getMediaMediumLarge(mediaData: MediaItem) {
    var data: any = mediaData.media_details.sizes;
    return data.medium_large.source_url;
  },
  getMediaLarge(mediaData: MediaItem) {
    var data: any = mediaData.media_details.sizes;
    return data.thumbnail.larger;
  },
  getMediaFull(mediaData: MediaItem) {
    var data: any = mediaData.media_details.sizes;
    return data.thumbnail.full;
  },
  getMediaSlug(mediaData: MediaItem) {
    return mediaData.slug;
  }
};

export default MediaProcessor;
